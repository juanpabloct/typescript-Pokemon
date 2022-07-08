import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "../reducers/pokemon";
import { ReduxState } from "../types/store";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const allReducers = combineReducers({
  pokemon: pokemonsSlice.reducer,
});
const persistenceReducer=persistReducer(persistConfig, allReducers)
export const store = configureStore({
  reducer: persistenceReducer,
  middleware: [thunk],
});
export const dataStore=persistStore(store)