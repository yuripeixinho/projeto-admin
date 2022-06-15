import axios from "axios";

const api = axios.create({
  baseURL: "https://mercadinho-do-seu-ze.herokuapp.com",
});

export default api;
