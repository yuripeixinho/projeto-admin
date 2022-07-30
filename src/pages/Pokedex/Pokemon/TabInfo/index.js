/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { Col, Row } from "reactstrap";

import "./styles.scss";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../services/api.service";

export default function TabInfo({ pokemon }) {
  const { id } = useParams();
  const [basicActive, setBasicActive] = useState("tab1");
  const [pokemonEvolution, setPokemonEvolution] = useState([]);
  const [aboutInfo, setAboutInfo] = useState([]);

  let navigate = useNavigate();

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  useEffect(() => {
    async function getEvolutionChain() {
      const aboutPokemon = await api.get(`pokemon-species/${id}`);
      const response = aboutPokemon.data;

      const evolutionUrl = response.evolution_chain;

      const evolutionChain = await api.get(evolutionUrl.url);
      const data = evolutionChain.data.chain;

      let evolutionInfo = [];

      evolutionInfo.push(data.species.name);

      data.evolves_to.forEach((element) => {
        evolutionInfo.push(element.species.name);
        if (element.hasOwnProperty("evolves_to")) {
          element.evolves_to.forEach((secEvolution) => {
            evolutionInfo.push(secEvolution.species.name);
          });
        }
      });

      evolutionInfo.forEach(async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();

        setPokemonEvolution((currentList) => [
          ...currentList,
          { id: data.id, name: data.name, sprites: data.sprites },
        ]);
      });

      setAboutInfo({ aboutText: response.flavor_text_entries[10].flavor_text });
    }

    getEvolutionChain();
  }, []);

  return (
    <div className="tab-info-container">
      <MDBTabs className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
          >
            About
          </MDBTabsLink>
        </MDBTabsItem>

        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
          >
            Evolution
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab1"}>
          <div className="anthropometric-info">
            Weight: {pokemon.weight} | Height: {pokemon.height}
          </div>

          <div className="about">
            <p>{aboutInfo.aboutText}</p>
          </div>

          <Row className="sprites-container">
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
              {/* <img src={spriteAnimated?.front_default} alt="" />

              <img src={spriteAnimated?.back_default} alt="" /> */}
            </Col>
          </Row>
        </MDBTabsPane>

        <MDBTabsPane show={basicActive === "tab2"}>
          <div className="evolution-info-container">
            <Row>
              {pokemonEvolution.map((pokemon) => (
                <Col xs="4" sm="4" md="4" lg="4" xl="4" key={pokemon.id}>
                  <div
                    className="evolution-card"
                    onClick={() => navigate(`/pokedex/${pokemon.id}`)}
                  >
                    <span>#{pokemon.id}</span>

                    <div className="img-container">
                      <img
                        src={
                          pokemon["sprites"]["other"]["home"]["front_default"]
                        }
                        alt={pokemon.name}
                      />
                    </div>

                    <p>{pokemon.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}
