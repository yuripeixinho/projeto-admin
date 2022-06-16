import { Formik, Form } from "formik";
import React from "react";
import { Col, Row } from "reactstrap";
import HeaderSection from "../../../components/HeaderSection";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

import "./styles.scss";

export default function ProductForm() {
  return (
    <Row>
      <HeaderSection title="Product Form" />

      <Col xl="7" lg="7" md="7" sm="7" xs="7">
        <Formik
          enableReinitialize
          initialValues={{
            nome: "",
            preco: "",
            ingredientes: "",
            linkImagem: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {(props) => (
            <Form>
              <Row>
                <Col xl="2" lg="2" md="2" sm="2" xs="2">
                  <Input
                    label="Preço"
                    required={true}
                    type="number"
                    name="preco"
                  />
                </Col>

                <Col xl="5" lg="5" md="5" sm="5" xs="5">
                  <Input label="Nome" required={true} type="text" name="nome" />
                </Col>

                <Col xl="7" lg="7" md="7" sm="7" xs="7">
                  <TextArea
                    label="Ingredientes"
                    required={true}
                    type="text"
                    name="ingredientes"
                  />
                </Col>

                <Col xl="7" lg="7" md="7" sm="7" xs="7">
                  <Input
                    label="Link da imagem"
                    required={true}
                    type="text"
                    name="linkImagem"
                  />
                </Col>
              </Row>

              <button type="submit">Salvar</button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
}
