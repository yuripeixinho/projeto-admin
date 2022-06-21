import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import HeaderSection from "../../components/HeaderSection";
import MainDataTable from "../../components/MainDataTable";
import UserService from "../../services/user.service";

export default function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function init() {
      const _userService = new UserService();
      const userResponse = await _userService.list();
      setUserData(userResponse?.users);
    }

    init();
  }, []);

  const columns = [
    {
      id: 1,
      name: "Name",
      selector: (row) => row.nome,
    },
    {
      id: 2,
      name: "Email",
      selector: (row) => row.email,
    },
    {
      id: 3,
      name: "PokeCoin",
      selector: (row) => row.pokeCoin,
    },
    {
      id: 4,
      name: "Amount of pokemon",
      selector: (row) => row.pokemons.length,
    },
  ];

  return (
    <Row>
      <HeaderSection title="Users" />

      <Col xl="12" lg="12" md="12" sm="12" xs="12">
        <MainDataTable
          data={userData}
          columns={columns}
          navigateEndpoint="/user"
        />
      </Col>
    </Row>
  );
}
