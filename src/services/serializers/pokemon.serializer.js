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
}
