import axios from "axios";

export const swapiInstance = axios.create({
  baseURL: "https://swapi.dev/api",
});
