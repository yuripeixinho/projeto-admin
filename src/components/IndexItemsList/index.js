import React from "react";
import { Col, Row } from "reactstrap";

import "./styles.scss";

export default function ItemTable({ items, buttonLabel }) {
  return (
    <Row className="index-items-list-container">
      <Col md="12" className="button-container">
        <button type="button" className="add-item-button">
          {buttonLabel}
        </button>
      </Col>

      {items?.map((item) => (
        <Col xl="3" lg="3" md="3" sm="3" xs="3">
          <div className="items-table-container">
            <h1>{item.nome}</h1>
          </div>
        </Col>
      ))}
    </Row>
  );
}
