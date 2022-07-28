import api from "./api.service";
import CoreApiService from "./core-api.service";
import PokemonSerializer from "./serializers/pokemon.serializer";

export default class PokemonService extends CoreApiService {
  constructor() {
    super(undefined, "pokemon", new PokemonSerializer());
  }

  async listAllPokemons(limit) {
    const response = await api.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );

    const data = response.data;
    return data;
  }

  async getPokemonSpecies(specie) {
    const response = await api.get(`${specie}`);

    const data = response.data;
    return this.serializer.fromJson(data);
  }
}
