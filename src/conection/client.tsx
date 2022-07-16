import axios from "axios";

export const api = "https://pokeapi.co/api/v2/";

export const client = axios.create({
  baseURL: api,
});
