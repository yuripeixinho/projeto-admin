export default class PokemonSerializer {
  fromJson(json) {
    debugger;
    const pokemon = {};

    Object.assign(
      pokemon,
      json.id && { id: json.id },
      json.nome && { nome: json.nome },
      json.descricao && { descricao: json.descricao },
      json.vida && { vida: json.vida },
      json.dano && { dano: json.dano },
      json.preco && { preco: json.preco },
      json.quantCliques && { quantCliques: json.quantCliques },
      json.linkImagem && { linkImagem: json.linkImagem },

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
