export default class PokemonSerializer {
  fromJson(json) {
    debugger;
    const pokemon = {};

    Object.assign(
      pokemon,

      json.response && {
        pokemons: json.response,
      }
    );

    return pokemon;
  }

  toJson(pokemon) {
    const pokemonToJson = {};

    Object.assign(
      pokemonToJson,
      pokemon.nome && { nome: pokemon.nome },
      pokemon.preco && { preco: pokemon.preco },
      pokemon.ingredientes && { ingredientes: pokemon.ingredientes },
      pokemon.linkImagem && { linkImagem: pokemon.linkImagem },
      pokemon.quantCliques && { quantCliques: pokemon.quantCliques }
    );

    return pokemonToJson;
  }
}
