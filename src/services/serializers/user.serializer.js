import PokemonSerializer from "./pokemon.serializer";

export default class UserSerializer {
  constructor() {
    this.PokemonSerializer = new PokemonSerializer();
  }

  fromJson(json) {
    debugger;
    const user = {};

    Object.assign(
      user,
      json.id && { id: json.id },
      json.nome && { nome: json.nome },
      json.email && { email: json.email },
      json.linkFotoPerfil && { linkFotoPerfil: json.linkFotoPerfil },
      json.pokeCoin && { pokeCoin: json.pokeCoin },
      json.senha && { senha: json.senha },
      json.tipoPerfil && { tipoPerfil: json.tipoPerfil },
      json.pokemons && {
        pokemons: json.pokemons.map((item) =>
          this.PokemonSerializer.fromJson(item)
        ),
      },

      json.response && {
        users: json.response,
      }
    );

    return user;
  }

  toJson(user) {
    debugger;
    const userToJson = {};

    Object.assign(
      userToJson,
      user.nome && { nome: user.nome },
      user.email && { email: user.email },
      user.linkFotoPerfil && { linkFotoPerfil: user.linkFotoPerfil },
      user.pokeCoin && { pokeCoin: user.pokeCoin },
      user.senha && { senha: user.senha },
      user.tipoPerfil && { tipoPerfil: user.tipoPerfil }
    );

    return userToJson;
  }
}
