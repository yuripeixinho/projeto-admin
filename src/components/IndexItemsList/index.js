import React from "react";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export default function ItemTable({ items, buttonLabel, navigateEndpoint }) {
  let navigate = useNavigate();

  return (
    <Row className="index-items-list-container">
      <Col md="12" className="button-container">
        <button
          type="button"
          className="add-item-button"
          onClick={() => navigate(`${navigateEndpoint}/form`)}
        >
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
