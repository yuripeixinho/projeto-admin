/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import { Col, Row } from "reactstrap";
import ButtonsFooter from "../../../components/ButtonsFooter";
import HeaderSection from "../../../components/HeaderSection";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import PokemonService from "../../../services/pokemon.service";
import { useNavigate } from "react-router-dom";

import "../../../assets/scss/mixins.scss";

import "./styles.scss";
import pokemon from "../../../validations/pokemon";
import AlertMessages from "../../../components/AlertMessages";

export default function PokemonForm() {
  const { id } = useParams();
  const [pokemonValues, setPokemonValues] = useState();
  const [actionCreate, setActionCreate] = useState(true);
  const [hasAlert, setHasAlert] = useState(false);

  let navigate = useNavigate();

  const _pokemonService = new PokemonService();

  useEffect(() => {
    if (id) {
      async function getPokemon() {
        const pokemonResponse = await _pokemonService.read(id);
        setPokemonValues(pokemonResponse);
      }

      setActionCreate(false);
      getPokemon();
    } else {
      setPokemonValues({
        nome: "",
        preco: "",
        ingredientes: "",
        linkImagem: "",
        quantCliques: 1,
      });

      setActionCreate(true);
    }
  }, [id]);

  async function onCreatePokemon(values) {
    if (actionCreate) {
      await _pokemonService
        .create(values)
        .then((response) => {
          navigate("/pokemons");
        })
        .catch((response) => {
          console.log(response);
        });
    } else {
      debugger;
      await _pokemonService
        .update(values)
        .then((response) => {
          setHasAlert(true);
        })
        .catch((response) => {
          console.log(response);
        });
    }
  }

  async function handleDelete(values) {
    console.log(values);
    debugger;
    await _pokemonService
      .delete(values.id)
      .then((response) => {
        navigate("/pokemons");
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <Row>
      <HeaderSection title={actionCreate ? "Create pokemon" : "Edit pokemon"} />

      <Col
        xl="5"
        lg="5"
        md="5"
        sm="5"
        xs="5"
        className="pokemon-form-container"
      >
        <Formik
          enableReinitialize={true}
          validationSchema={pokemon}
          initialValues={pokemonValues}
          onSubmit={(values) => {
            onCreatePokemon(values);
          }}
        >
          {(props) => (
            <Form>
              <Row>
                <Col xl="3" lg="3" md="3" sm="3" xs="3">
                  <Input
                    label="Preço"
                    required={true}
                    type="number"
                    name="preco"
                  />
                </Col>

                <Col xl="9" lg="9" md="9" sm="9" xs="9">
                  <Input label="Nome" required={true} type="text" name="nome" />
                </Col>

                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                  <TextArea
                    label="Ingredientes"
                    required={true}
                    type="text"
                    name="ingredientes"
                  />
                </Col>

                <Col
                  xl="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                  className="input-container"
                >
                  <Input
                    label="Link da imagem"
                    required={true}
                    type="text"
                    name="linkImagem"
                  />

                  <img
                    src={props?.values?.linkImagem}
                    alt="Vizualização de imagem"
                  />
                </Col>
              </Row>

              <Col xl="12" lg="12" md="12" sm="12" xs="12">
                <ButtonsFooter
                  buttonSubmit={true}
                  buttonCancel={true}
                  buttonDelete={actionCreate ? false : true}
                  routeNavigate="/pokemons"
                  handleDelete={handleDelete}
                  props={props.values}
                />
              </Col>
            </Form>
          )}
        </Formik>
      </Col>

      {hasAlert && (
        <Col md="12">
          <AlertMessages label="teste" />
        </Col>
      )}
    </Row>
  );
}
