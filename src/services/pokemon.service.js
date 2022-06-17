import CoreApiService from "./core-api.service";
import PokemonSerializer from "./serializers/pokemon.serializer";

export default class PokemonService extends CoreApiService {
  constructor() {
    super(undefined, "pokemons", new PokemonSerializer());
  }
}
