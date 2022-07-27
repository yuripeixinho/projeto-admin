import React from "react";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ id, name, image, types }) {
  const styleBackground = `pokemon-card-container`;
  const styleButton = `button-pokemon-type ${types}`;

  const navigate = useNavigate();

  return (
    <div className={styleBackground} onClick={() => navigate(`/pokedex/${id}`)}>
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
  );
}
