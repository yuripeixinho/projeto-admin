export default class PokemonSerializer {
  fromJson(json) {
    const pokemon = {};

    Object.assign(
      pokemon,
      json.id && { id: json.id },
      json.height && { height: json.height },
      json.weight && { weight: json.weight },
      json.name && { name: json.name },
      json.sprites && {
        sprites: json.sprites,
        spriteAnimated:
          json["sprites"]["versions"]["generation-v"]["black-white"][
            "animated"
          ],
      },
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
      },

      json.flavor_text_entries && {
        textAbout: json.flavor_text_entries[10].flavor_text,
      }
    );

    return pokemon;
  }
}
