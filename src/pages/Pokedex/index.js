import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokedex() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=200"
  );

  const navigate = useNavigate();

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemon((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
    await console.log(allPokemon);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      {allPokemon.map((pokemon) => (
        <div>
          {console.log(pokemon)}
          <li onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            {pokemon.name}
          </li>

          <img src={pokemon.sprites.other.dream_world.front_default} />
          <img src={pokemon.sprites.other.home.front_default} />
        </div>
      ))}
    </div>
  );
}
