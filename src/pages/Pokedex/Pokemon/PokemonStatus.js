import React from "react";
import Health from "../../../assets/images/icons/health.svg";
import Lighting from "../../../assets/images/icons/lighting.svg";
import Shield from "../../../assets/images/icons/shield.svg";
import Speed from "../../../assets/images/icons/speed.svg";

export default function PokemonStatus({ status }) {
  return (
    <div className="pokemon-status-container">
      {status?.map(
        (item) =>
          item !== null && (
            <div className="status-box">
              <div className="icon">
                {item?.stat?.name === "hp" && <img src={Health} alt="" />}
                {item?.stat?.name === "attack" && <img src={Lighting} alt="" />}
                {item?.stat?.name === "defense" && <img src={Shield} alt="" />}
                {item?.stat?.name === "speed" && <img src={Speed} alt="" />}
              </div>

              <div className="text">
                <span className="name">{item?.stat?.name}</span>
                <span className="number">{item.base_stat}</span>
              </div>
            </div>
          )
      )}
    </div>
  );
}
