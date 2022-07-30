/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonService from "../../../services/pokemon.service";
import { Col } from "reactstrap";

import "./styles.scss";
import PokemonStatus from "./PokemonStatus";
import TabInfo from "./TabInfo";
import api from "../../../services/api.service";

export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [aboutPokemon, setAboutPokemon] = useState([]);
  const dinamicBackground = `pokemon-info ${pokemon.types}-background`;

  useEffect(() => {
    async function getAboutPokemon() {
      const res = await api.get(`pokemon-species/${id}`);
      const data = res.data;

      setAboutPokemon({ aboutText: data.flavor_text_entries[10].flavor_text });
    }

    async function getPokemon() {
      const _pokemonService = new PokemonService();
      const pokemonResponse = await _pokemonService.read(id);
      setPokemon(pokemonResponse);

      getAboutPokemon();
    }

    getPokemon();
  }, [id]);

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

      <TabInfo pokemon={pokemon} aboutPokemon={aboutPokemon} />
    </Col>
  );
}
