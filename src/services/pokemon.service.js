import api from "./api.service";
import CoreApiService from "./core-api.service";
import PokemonSerializer from "./serializers/pokemon.serializer";

export default class PokemonService extends CoreApiService {
  constructor() {
    super(undefined, "pokemon", new PokemonSerializer());
  }

  async listAllPokemons() {
    debugger;
    const response = await api.get(`${this.endpoint}?limit=20`);

    const result = response?.data?.results;

    result?.forEach(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      debugger;

      const data = await res.json();
    });
  }
}
