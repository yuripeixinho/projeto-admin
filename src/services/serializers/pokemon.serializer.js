export default class PokemonSerializer {
  fromJson(json) {
    debugger;
    const pokemon = {};

    Object.assign(
      pokemon,
      json.id && { id: json.id },
      json.name && { name: json.name },
      json.sprites && { sprites: json.sprites },
      json.types && { types: json.types[0].type.name },

      json.stats && {
        stats: json?.stats?.map((item) => {
          if (
            item.stat.name === "hp" ||
            item.stat.name === "attack" ||
            item.stat.name === "defense" ||
            item.stat.name === "speed"
          ) {
            return item;
          } else {
            return null;
          }
        }),
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
