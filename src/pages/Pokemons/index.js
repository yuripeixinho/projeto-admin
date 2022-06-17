import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import HeaderSection from "../../components/HeaderSection";
import ItemTable from "../../components/IndexItemsList";
import PokemonService from "../../services/pokemon.service";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

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

      <ItemTable
        items={pokemons}
        buttonLabel="Adicionar"
        createEndpoint="/pokemon"
      />
    </Row>
  );
}
