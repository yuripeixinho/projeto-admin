import * as Yup from "yup";
import { message } from "./errorMessage";

export default Yup.object().shape({
  preco: Yup.string().required(message.REQUIRED),
  nome: Yup.string().required(message.REQUIRED),
  ingredientes: Yup.string().required(message.REQUIRED),
  linkImagem: Yup.string().required(message.REQUIRED),
});
