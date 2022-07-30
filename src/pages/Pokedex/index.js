import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import PokemonService from "../../services/pokemon.service";
import PokemonCard from "./PokemonCard";

import "./styles.scss";

export default function Pokedex() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    async function getAllPokemons() {
      setLoadingPage(true);
      const pokemonService = new PokemonService();
      const pokemonResponse = await pokemonService.listAllPokemons(200);

      function createPokemonObject(result) {
        result.forEach(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await res.json();

          setAllPokemon((currentList) => [...currentList, data]);
        });
      }

      createPokemonObject(pokemonResponse.results);
      setLoadingPage(false);
    }

    async function init() {
      getAllPokemons();
    }

    init();
  }, []);

  if (loadingPage) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="pokedex-list-container">
      <Row className="cards-container">
        {allPokemon.map((pokemon) => (
          <Col xs="6" sm="6" md="4" lg="3" xl="2" >
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.home.front_default}
              types={pokemon.types[0].type.name}
              key={pokemon.id}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
