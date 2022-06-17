import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import HeaderSection from "../../components/HeaderSection";
import PokemonService from "../../services/pokemon.service";

import "./styles.scss";

export default function Dashboard() {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    async function init() {
      const _pokemonService = new PokemonService();
      const pokemonResponse = await _pokemonService.list();
      setPokemonInfo(pokemonResponse?.pokemons);
    }

    init();
  }, []);

  return (
    <Row>
      <HeaderSection title="Dashboard" />
    </Row>
  );
}
