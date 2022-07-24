import React from "react";
import { Col, Row } from "reactstrap";
import Pokeball from "../../assets/images/pokeball.png";

import "./styles.scss";

export default function Menu() {
  return (
    <Row className="nav-container">
      <Col xs="12" sm="12">
        <div className="menu-image-container">
          <img src={Pokeball} alt="Menu" />
        </div>
      </Col>
    </Row>
  );
}
