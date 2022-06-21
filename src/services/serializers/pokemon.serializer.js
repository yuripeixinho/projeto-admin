export default class PokemonSerializer {
  fromJson(json) {
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
    debugger;
    const pokemonToJson = {};

    Object.assign(
      pokemonToJson,
      pokemon.nome && { nome: pokemon.nome },
      pokemon.descricao && { descricao: pokemon.descricao },
      pokemon.vida && { vida: pokemon.vida },
      pokemon.dano && { dano: pokemon.dano },
      pokemon.preco && { preco: pokemon.preco },
      pokemon.quantCliques && { quantCliques: pokemon.quantCliques },
      pokemon.linkImagem && { linkImagem: pokemon.linkImagem }
    );

    return pokemonToJson;
  }
}
