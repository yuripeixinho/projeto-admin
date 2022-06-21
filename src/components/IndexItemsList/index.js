import React from "react";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export default function ItemTable({ items, buttonLabel, createEndpoint }) {
  let navigate = useNavigate();

  return (
    <Row className="index-items-list-container">
      <Col md="12" className="button-container">
        <button
          type="button"
          className="add-item-button"
          onClick={() => navigate(`${createEndpoint}/form`)}
        >
          {buttonLabel}
        </button>
      </Col>

      {items?.map((item) => (
        <Col xl="3" lg="3" md="4" sm="6" xs="12" key={item.id}>
          <div
            className="items-table-container"
            onClick={() => navigate(`${createEndpoint}/form/${item.id}`)}
          >
            <img src={item.linkImagem} alt={item.nome} />

            <Row className="text-info-container">
              <Col xl="12" lg="12" md="12" sm="12" xs="12">
                <h1>{item.nome}</h1>
              </Col>

              <Col xl="6" lg="6" md="6" sm="6" xs="6">
                <span>R$: {item.preco}</span>
              </Col>

              <Col xl="6" lg="6" md="6" sm="6" xs="6" className="cliques">
                <span>Cliques: {item.quantCliques}</span>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
}
