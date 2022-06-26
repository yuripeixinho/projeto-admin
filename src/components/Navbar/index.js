import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { AuthContext } from "../../contexts/Auth";

import "./styles.scss";

export default function NavBar() {
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  console.log(user);

  return (
    <Row className="nav-bar-container">
      <Col xl="7" lg="7" md="7" sm="7" xs="7" className="nav-user-info">
        <img src={user?.linkFotoPerfil} alt={user?.nome} />

        <Col md="12">
          <h5>{user?.nome}</h5>
        </Col>

        <Col md="12">
          <button type="button">Profile</button>

          <button onClick={handleLogout} type="button">
            Logout
          </button>
        </Col>
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
