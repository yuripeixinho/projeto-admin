import React from "react";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export default function AddItemButton({ label, routeNavigate }) {
  let navigate = useNavigate();

  return (
    <Col md="12" className="button-container">
      <button
        type="button"
        className="add-item-button"
        onClick={() => navigate(`${routeNavigate}/form`)}
      >
        {label}
      </button>
    </Col>
  );
}
