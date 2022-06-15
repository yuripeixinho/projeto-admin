import React from "react";
import { Col } from "reactstrap";

import "./styles.scss";

export default function HeaderSection({ title }) {
  return (
    <Col md="12" className="header-section-container">
      <h1>{title}</h1>
      <hr />
    </Col>
  );
}
