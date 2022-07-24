import React from "react";
import { Col, Row } from "reactstrap";

export default function PokemonCard({ id, name, image, types }) {
  const styleBackground = `pokemon-card-container`;
  const styleButton = `button-pokemon-type ${types}`;

  return (
    <Col xs="6" sm="6">
      <div className={styleBackground}>
        <img src={image} alt={name} />

        <Row>
          <Col xs="12" sm="12" className="text-pokemon-info">
            <span>{name}</span> <span>#{id}</span>
          </Col>

          <Col xs="12" sm="12">
            <button type="button" className={styleButton}>
              <span>{types}</span>
            </button>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

{
  /* <img src={pokemon.sprites.other.dream_world.front_default} />
          <img src={pokemon.sprites.other.home.front_default} /> */
}
