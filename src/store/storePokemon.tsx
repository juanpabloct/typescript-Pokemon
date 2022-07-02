import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "../reducers/pokemon";

export const store = configureStore({
  reducer: pokemonsSlice.reducer,
});
