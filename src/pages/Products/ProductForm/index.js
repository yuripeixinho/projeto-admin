/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import { Col, Row } from "reactstrap";
import ButtonsFooter from "../../../components/ButtonsFooter";
import HeaderSection from "../../../components/HeaderSection";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import ProductService from "../../../services/product.service";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export default function ProductForm() {
  const { id } = useParams();
  const [productValues, setProductValues] = useState();
  const [actionCreate, setActionCreate] = useState(true);

  let navigate = useNavigate();

  const _productService = new ProductService();

  useEffect(() => {
    if (id) {
      async function getProducts() {
        const productResponse = await _productService.read(id);
        setProductValues(productResponse);
      }

      setActionCreate(false);
      getProducts();
    } else {
      setProductValues({
        nome: "",
        preco: "",
        ingredientes: "",
        linkImagem: "",
        quantCliques: 1,
      });

      setActionCreate(true);
    }
  }, [id]);

  async function onCreateProduct(values) {
    if (actionCreate) {
      await _productService
        .create(values)
        .then((response) => {
          navigate("/products");
        })
        .catch((response) => {
          console.log(response);
        });
    } else {
      debugger;
      await _productService
        .update(values)
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
        });
    }
  }

  async function handleDelete(values) {
    console.log(values);
    debugger;
    await _productService
      .delete(values.id)
      .then((response) => {
        navigate("/products");
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <Row>
      <HeaderSection title={actionCreate ? "Create product" : "Edit product"} />

      <Col
        xl="5"
        lg="5"
        md="5"
        sm="5"
        xs="5"
        className="product-form-container"
      >
        <Formik
          enableReinitialize={true}
          initialValues={productValues}
          onSubmit={(values) => {
            onCreateProduct(values);
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
                  routeNavigate="/products"
                  handleDelete={handleDelete}
                  props={props.values}
                />
              </Col>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
}
