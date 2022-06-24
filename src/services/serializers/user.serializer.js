export default class UserSerializer {
  fromJson(json) {
    debugger;
    const user = {};

    Object.assign(
      user,

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
      user.senha && { senha: user.senha }
    );

    return userToJson;
  }
}
