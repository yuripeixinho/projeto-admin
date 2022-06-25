import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { AuthContext } from "../../contexts/Auth";

import "./styles.scss";

export default function NavBar() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Row className="nav-bar-container">
      <Col>
        <button onClick={handleLogout}>logout</button>
      </Col>

      <ul>
        <Link to="/">
          <li>
            <span>Dashboard</span>
          </li>
        </Link>

        <Link to="/pokemons">
          <li>
            <span>Pokemons</span>
          </li>
        </Link>

        <Link to="/users">
          <li>
            <span>Users</span>
          </li>
        </Link>
      </ul>
    </Row>
  );
}
