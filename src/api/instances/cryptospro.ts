import axios from "axios";

export const cryptosproInstance = axios.create({
  baseURL: "https://cryptospro.com.br/planetas",
});
