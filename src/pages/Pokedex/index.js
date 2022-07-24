import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Container } from "reactstrap";
import PokemonService from "../../services/pokemon.service";
import PokemonCard from "./PokemonCard";

import "./styles.scss";

export default function Pokedex() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);

  const navigate = useNavigate();

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
    <div>
      <div className="header-container">header</div>

      <Container>
        <Row>
          {allPokemon.map((pokemon) => (
            <>
              {console.log(pokemon)}
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.home.front_default}
                types={pokemon.types[0].type.name}
                key={pokemon.id}
              />
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
}
