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
import PokemonService from "../../../../services/pokemon.service";

export default function TabInfo({ specie, height, weight, spriteAnimated }) {
  const [basicActive, setBasicActive] = useState("tab1");
  const [specieInfo, setSpecieInfo] = useState([]);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  useEffect(() => {
    async function getPokemonSpecie() {
      const _pokemonService = new PokemonService();
      const pokemonResponse = await _pokemonService.getPokemonSpecies(specie);
      setSpecieInfo(pokemonResponse);
    }

    getPokemonSpecie();
  }, [specie]);

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
            Weight: {weight} | Height: {height}
          </div>

          <div className="about">
            <p>{specieInfo?.textAbout}</p>
          </div>

          <Row className="sprites-container">
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
              <img src={spriteAnimated?.front_default} alt="" />

              <img src={spriteAnimated?.back_default} alt="" />
            </Col>
          </Row>
        </MDBTabsPane>

        <MDBTabsPane show={basicActive === "tab2"}>Evolution</MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}
