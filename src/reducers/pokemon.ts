import { createSlice } from "@reduxjs/toolkit";
import { PokemonFilter, PokemonState } from "../types/store";

let initialState: PokemonState = {
  filter: { generation: null, name: "" },
  data: undefined,
  users: [],
  loginUser: { user: "", password: "" },
};

const pokemonsSlice = createSlice({
  name: "Pokemons",
  initialState,
  reducers: {
    pokemonFilter: (
      state,
      action: {
        payload: Partial<PokemonFilter>;
        type: string;
      }
    ) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    changeData: (state, action) => {
      state.data = action.payload.results;
    },
  },
});
export default pokemonsSlice;
