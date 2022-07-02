import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";

type typeInitialState = {
  filter: any;
  data: object;
  users: object;
  loginUser: object;
};
let initialState: typeInitialState = {
  filter: { generation: "", name: "" },
  data: [],
  users: [],
  loginUser: { user: "", password: "" },
};

const pokemonsSlice = createSlice({
  name: "Pokemons",
  initialState,
  reducers: {
    filterGeneration: (state, action) => {
      console.log(action.payload);

      state.filter.generation = action.payload;
    },
    changeData: (state, action) => {
      state.data = action.payload.results;
    },
    filterName: (state, action) => {
      state.filter.name = action.payload;
    },
  },
});
export default pokemonsSlice;
