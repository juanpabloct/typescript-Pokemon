import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "../reducers/pokemon";
import { ReduxState } from "../types/store";

export const store = configureStore<ReduxState>({
  reducer: { pokemon: pokemonsSlice.reducer },
});
