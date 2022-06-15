import React from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";

import "./styles.scss";

export default function NavBar() {
  return (
    <Row className="nav-bar-container">
      <ul>
        <Link to="/">
          <li>
            <span>Dashboard</span>
          </li>
        </Link>

        <Link to="/products">
          <li>
            <span>Products</span>
          </li>
        </Link>
      </ul>
    </Row>
  );
}
