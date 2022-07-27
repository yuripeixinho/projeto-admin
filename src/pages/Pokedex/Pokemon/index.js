import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonService from "../../../services/pokemon.service";
import { Row, Col } from "reactstrap";
import ArrowLeft from "../../../assets/images/icons/arrow-left.svg";

import "./styles.scss";
import PokemonStatus from "./PokemonStatus";

export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const dinamicBackground = `pokemon-info ${pokemon.types}-background`;

  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      debugger;
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

      <Col xs="12" sm="12" md="12" lg="12" xl="12">
        <PokemonStatus status={pokemon?.stats} />
      </Col>
    </Col>
  );
}
