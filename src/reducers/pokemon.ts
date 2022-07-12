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
  page: { page: 1, limit: 0 },
  showDataPagination: [],
};

const pokemonsSlice = createSlice({
  name: "Pokemons",
  initialState,
  reducers: {
    changeDataPagination: (state, action) => {
      const pagination = (state.data.length / 12).toFixed();
      state.page.page = action.payload.page;
      if (state.page.page === 1) {
        if (action.payload.results) {
          const copyData = action.payload.results.slice(0, 12);
          state.showDataPagination = copyData;
          state.page.limit = +(copyData.length / 12).toFixed();
        } else {
          const copyData = state.data.slice(0, 12);
          state.showDataPagination = copyData;
          state.page.limit = +pagination;
        }
      } else {
        const endCopy = state.page.page * 12;
        const copyData = state.data.slice(endCopy - 12, endCopy);
        const pagination = (state.data.length / 12).toFixed();
        state.showDataPagination = copyData;
        state.page.limit = +pagination;
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
          const { results } = action.payload;
          console.log(action.payload.results);
          state.data = results;
          state.showDataPagination.push(action.payload.results);
        } else {
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
    },
  },
});
export default pokemonsSlice;
