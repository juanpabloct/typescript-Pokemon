import { createSlice } from "@reduxjs/toolkit";
import { PokemonFilter, PokemonState } from "../types/store";
const users = [
  {
    user: "Juanitoperez122003@gmail.com",
    password: "12345678",
    accesPermission: false,
  },
  {
    user: "Juanitotorres2004@gmail.com",
    password: "12345678",
    accesPermission: false,
  },
];
let initialState: PokemonState = {
  filter: { generation: null, name: "" },
  data: [...users],
  users: [
    {
      user: "Juanitoperez122003@gmail.com",
      password: "12345678",
    },
    {
      user: "Juanitotorres2004@gmail.com",
      password: "12345678",
    },
  ],
  loginUser: { user: "", password: "", accesPermission: false },
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
      const filtroEmail = state.users.filter((user) => {
        return (
          user.user === action.payload.email &&
          user.password === action.payload.password
        );
      });
      if (filtroEmail.length > 0) {
        filtroEmail[0].accesPermission = true;
        state.loginUser = filtroEmail[0];
      }
    },
  },
});
export default pokemonsSlice;
