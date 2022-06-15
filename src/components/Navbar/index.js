import React from "react";
import { Row } from "reactstrap";

import "./styles.scss";

export default function NavBar() {
  return (
    <Row className="nav-bar-container">
      <ul>
        <li>
          <span>Dashboard</span>
        </li>

        <li>
          <span>Products</span>
        </li>
      </ul>
    </Row>
  );
}
