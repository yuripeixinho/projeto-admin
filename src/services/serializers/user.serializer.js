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
}
