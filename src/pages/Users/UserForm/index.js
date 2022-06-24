/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import HeaderSection from "../../../components/HeaderSection";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import Input from "../../../components/Input";
import ImageDefault from "../../../assets/images/default-img-placeholder.png";
import ButtonsFooter from "../../../components/ButtonsFooter";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import UserService from "../../../services/user.service";
import AlertMessages from "../../../components/AlertMessages";

export default function UserForm() {
  const { id } = useParams();
  const [userValues, setUserValues] = useState([]);
  const [actionCreate, setActionCreate] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [danger, setDanger] = useState(false);
  const [sucess, setSucess] = useState(false);

  let navigate = useNavigate();

  const _userService = new UserService();

  useEffect(() => {
    if (id) {
      setActionCreate(false);

      async function getUser() {
        const pokemonResponse = await _userService.read(id);
        setUserValues(pokemonResponse);
      }

      getUser();
    } else {
      setUserValues({
        nome: "",
        email: "",
        senha: "",
        pokeCoin: 500,
        linkFotoPerfil: "",
        pokemons: [],
      });
    }
  }, [id]);

  async function onCreateUser(values) {
    debugger;
    if (actionCreate) {
      debugger;
      await _userService
        .create(values)
        .then((response) => {
          navigate("/users");
        })
        .catch(({ response }) => {
          setAlertMessage(`${response}`);
        });
    } else {
      await _userService
        .update(values)
        .then((response) => {
          setAlertMessage("User updated successfully.");
          setSucess(true);

          setTimeout(() => {
            setSucess(false);
          }, 5000);
        })
        .catch(({ response }) => {
          setAlertMessage(`${response}`);
          setDanger(true);

          setTimeout(() => {
            setDanger(false);
          }, 5000);
        });
    }
  }

  async function handleDelete(values) {
    await _userService
      .delete(values.id)
      .then((response) => {
        navigate("/users");
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
      <HeaderSection title={id ? "Update user" : "Create user"} />

      <Col md="7" xl="5" className="user-form-container">
        <Formik
          enableReinitialize={true}
          initialValues={userValues}
          onSubmit={(values) => onCreateUser(values)}
        >
          {(props) => (
            <Form>
              {JSON.stringify(props.values)}
              <Row>
                <Col
                  className="input-container"
                  xl="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                >
                  <Input label="Nome" required={true} type="text" name="nome" />
                </Col>

                <Col
                  className="input-container"
                  xl="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                >
                  <Input
                    label="Email"
                    required={true}
                    type="email"
                    name="email"
                  />
                </Col>

                <Col
                  className="input-container"
                  xl="12"
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                >
                  <Input
                    label="Senha"
                    required={true}
                    type="password"
                    name="senha"
                  />
                </Col>

                <Col
                  className="input-container"
                  xl="7"
                  lg="7"
                  md="7"
                  sm="12"
                  xs="12"
                >
                  <Input
                    label="Link da imagem"
                    required={true}
                    type="text"
                    name="linkFotoPerfil"
                  />

                  <img
                    src={
                      props?.values?.linkFotoPerfil
                        ? props?.values?.linkFotoPerfil
                        : ImageDefault
                    }
                    alt="Preview"
                  />
                </Col>

                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                  <ButtonsFooter
                    buttonSubmit={true}
                    buttonCancel={true}
                    buttonDelete={actionCreate ? false : true}
                    routeNavigate="/users"
                    handleDelete={handleDelete}
                    props={props.values}
                  />
                </Col>
              </Row>
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
