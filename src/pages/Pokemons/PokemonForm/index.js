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
import ImageDefault from "../../../assets/images/default-img-placeholder.png";

import "../../../assets/scss/mixins.scss";

import "./styles.scss";
import pokemon from "../../../validations/pokemon";
import AlertMessages from "../../../components/AlertMessages";

export default function PokemonForm() {
  const { id } = useParams();
  const [pokemonValues, setPokemonValues] = useState();
  const [actionCreate, setActionCreate] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [danger, setDanger] = useState(false);
  const [sucess, setSucess] = useState(false);

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
        descricao: "",
        vida: "",
        dano: "",
        preco: "",
        quantCliques: 1,
        linkImagem: "",
      });

      setActionCreate(true);
    }
  }, [id]);

  async function onCreatePokemon(values) {
    debugger;
    if (actionCreate) {
      await _pokemonService
        .create(values)
        .then((response) => {
          navigate("/pokemons");
        })
        .catch(({ response }) => {
          setAlertMessage(`${response}`);
        });
    } else {
      await _pokemonService
        .update(values)
        .then((response) => {
          setAlertMessage("Pokemon updated successfully.");
          setSucess(true);

          setTimeout(() => {
            setSucess(false);
          }, 5000);
        })
        .catch((response) => {
          setAlertMessage(`${response}`);
          setDanger(true);

          setTimeout(() => {
            setDanger(false);
          }, 5000);
        });
    }
  }

  async function handleDelete(values) {
    await _pokemonService
      .delete(values.id)
      .then((response) => {
        navigate("/pokemons");
      })
      .catch((response) => {
        setAlertMessage(`${response}`);
        setDanger(true);

        setTimeout(() => {
          setDanger(false);
        }, 5000);
      });
  }

  return (
    <Row>
      <HeaderSection title={actionCreate ? "Create pokemon" : "Edit pokemon"} />

      <Col md="7" xl="5" className="pokemon-form-container">
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
                <Col
                  xl="12"
                  lg="12"
                  md="6"
                  sm="12"
                  xs="12"
                  className="input-container"
                >
                  <Input label="Nome" required={true} type="text" name="nome" />
                </Col>

                <Col
                  xl="4"
                  lg="4"
                  md="6"
                  sm="12"
                  xs="12"
                  className="input-container"
                >
                  <Input
                    label="Vida"
                    required={true}
                    type="number"
                    name="vida"
                  />
                </Col>

                <Col
                  xl="4"
                  lg="4"
                  md="6"
                  sm="12"
                  xs="12"
                  className="input-container"
                >
                  <Input
                    label="Dano"
                    required={true}
                    type="number"
                    name="dano"
                  />
                </Col>

                <Col
                  xl="4"
                  lg="4"
                  md="6"
                  sm="12"
                  xs="12"
                  className="input-container"
                >
                  <Input
                    label="Preço"
                    required={true}
                    type="number"
                    name="preco"
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
                  <TextArea
                    label="Descrição"
                    required={true}
                    type="text"
                    name="descricao"
                  />
                </Col>

                <Col
                  xl="7"
                  lg="7"
                  md="8"
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
                    src={
                      props?.values?.linkImagem?.length
                        ? props?.values?.linkImagem
                        : ImageDefault
                    }
                    alt="Preview"
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

      <Col md="12">
        <AlertMessages label={alertMessage} sucess={sucess} danger={danger} />
      </Col>
    </Row>
  );
}
