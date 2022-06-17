import * as Yup from "yup";
import { message } from "./errorMessage";

export default Yup.object().shape({
  nome: Yup.string().required(message.REQUIRED),
  descricao: Yup.string().required(message.REQUIRED),
  vida: Yup.string().required(message.REQUIRED),
  dano: Yup.string().required(message.REQUIRED),
  preco: Yup.string().required(message.REQUIRED),
  linkImagem: Yup.string().required(message.REQUIRED),
});
