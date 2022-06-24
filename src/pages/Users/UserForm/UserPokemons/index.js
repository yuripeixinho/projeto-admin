import React from "react";
import { Col, Row } from "reactstrap";

import "./styles.scss";

export default function UserPokemons({ props }) {
  return (
    <Row>
      <div className="user-pokemon-header">
        <h3>User pokemons</h3>
        <hr />
      </div>

      {props?.map((item) => (
        <Col
          xl="2"
          lg="12"
          md="4"
          sm="6"
          xs="12"
          key={item.id}
          className="user-pokemon-container"
        >
          <div className="user-pokemon-card">
            <img src={item.linkImagem} alt={item.nome} />

            <Row>
              <Col
                xl="12"
                lg="12"
                md="12"
                sm="12"
                xs="12"
                className="text-info-container"
              >
                <h1>{item.nome}</h1>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
}
