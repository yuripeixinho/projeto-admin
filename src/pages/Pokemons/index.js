import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "reactstrap";
import AddItemButton from "../../components/AddItemButton";
import HeaderSection from "../../components/HeaderSection";
import PokemonService from "../../services/pokemon.service";

import "./styles.scss";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    async function init() {
      const _pokemonService = new PokemonService();

      const pokemonResponse = await _pokemonService.list();
      setPokemons(pokemonResponse?.pokemons);
    }

    init();
  }, []);

  return (
    <Row>
      <HeaderSection title="Pokemons" />

      <Row className="index-items-list-container">
        <AddItemButton label="Add pokemon" routeNavigate={"/pokemon"} />

        {pokemons?.map((item) => (
          <Col xl="3" lg="3" md="4" sm="6" xs="12" key={item.id}>
            <div
              className="items-table-container"
              onClick={() => navigate(`/pokemon/form/${item.id}`)}
            >
              <img src={item.linkImagem} alt={item.nome} />

              <Row className="text-info-container">
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                  <h1>{item.nome}</h1>
                </Col>

                <Col xl="6" lg="6" md="6" sm="6" xs="6">
                  <span>R$: {item.preco}</span>
                </Col>

                <Col xl="6" lg="6" md="6" sm="6" xs="6" className="cliques">
                  <span>Cliques: {item.quantCliques}</span>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </Row>
  );
}
