import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonService from "../../../services/pokemon.service";
import { Col } from "reactstrap";

import "./styles.scss";
import PokemonStatus from "./PokemonStatus";
import TabInfo from "./TabInfo";

export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const dinamicBackground = `pokemon-info ${pokemon.types}-background`;

  useEffect(() => {
    async function getPokemon() {
      const _pokemonService = new PokemonService();
      const pokemonResponse = await _pokemonService.read(id);
      setPokemon(pokemonResponse);
    }

    getPokemon();
  }, [id]);

  console.log(pokemon);
  return (
    <Col xs="12" sm="12" md="12" lg="12" xl="12" className={dinamicBackground}>
      <div className="main">
        <img
          src={pokemon?.sprites?.other?.home?.front_default}
          alt={pokemon.name}
        />

        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <div className="name">
            <h1>{pokemon.name}</h1>

            <button type="button">
              <span>{pokemon.types}</span>
            </button>
          </div>
        </Col>
      </div>

      <PokemonStatus status={pokemon?.stats} />

      <TabInfo
        specie={pokemon?.specie}
        height={pokemon.height}
        weight={pokemon.weight}
        spriteAnimated={pokemon.spriteAnimated}
      />
    </Col>
  );
}
