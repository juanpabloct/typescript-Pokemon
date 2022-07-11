import { createSlice } from "@reduxjs/toolkit";
import { PokemonFilter, PokemonState } from "../types/store";

let initialState: PokemonState = {
  filter: { generation: "", name: "", type: "" },
  users: [
    {
      user: "Juanitoperez122003@gmail.com",
      password: "12345678",
      name: "Juan Perez",
    },
    {
      user: "Juanitotorres2004@gmail.com",
      password: "12345678",
      name: "Juan torres",
    },
  ],
  data: [],
  accesUser: { user: "", password: "" },
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
        if (
          state.filter.generation.length > 0 &&
          state.filter.type.length > 0
        ) {
          state.data = [...action.payload.results];
          state.showDataPagination.push(action.payload.results);
        } else {
          console.log(action.payload.results);
          state.data = [...action.payload.results];
        }
      } else {
        state.data = action.payload.results;
        state.showDataPagination = [state.data];
      }
    },
    loginUser: (state, action) => {
      state.accesUser = action.payload;
    },
    showDataPagina: (state, action) => {
      state.showDataPagination = action.payload;
      console.log(state.showDataPagination);
    },
  },
});
export default pokemonsSlice;
