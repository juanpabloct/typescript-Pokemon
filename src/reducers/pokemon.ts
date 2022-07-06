import { createSlice } from "@reduxjs/toolkit";
import { PokemonFilter, PokemonState } from "../types/store";

let initialState: PokemonState = {
  filter: { generation: null, name: "" },
  data: [],
  users: [
    { user: "Juanitoperez122003@gmail.com", password: "12345678" },
    { user: "Juanitotorres2004@gmail.com", password: "12345678" },
  ],
  loginUser: { user: "", password: "" },
  page: 1,
  showDataPagination: [],
};

const pokemonsSlice = createSlice({
  name: "Pokemons",
  initialState,
  reducers: {
    changeDataPagination: (state, action) => {
      state.page = action.payload.page;
      if (state.page === 1) {
        const copyData = state.data.slice(0, 12);
        state.showDataPagination = copyData;
      } else {
        const endCopy = state.page * 12;
        const copyData = state.data.slice(endCopy - 12, endCopy);
        state.showDataPagination = copyData;
      }
    },
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
      if (action.payload.results.length > 0) {
        state.data = [...action.payload.results];
      } else {
        console.log(state.data);
        state.data = action.payload.results;
        state.showDataPagination = [state.data];
      }
    },
    loginUser: (state, action) => {
      const filtroEmail = state.users.filter(
        (user) =>
          user.user === action.payload.user.email &&
          user.password === action.payload.user.password
      );
      state.loginUser = filtroEmail && action.payload.user;
    },
  },
});
export default pokemonsSlice;
