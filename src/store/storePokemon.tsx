import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "../reducers/pokemon";
import { ReduxState } from "../types/store";

import localforage from "localforage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import { PersistPartial } from "redux-persist/lib/persistReducer";
import thunk from "redux-thunk";

const storage = localforage.createInstance({
  name: "redux",
  driver: localforage.INDEXEDDB,
});

const persistConfig: PersistConfig<ReduxState> = {
  key: "root",
  storage,
};

const allReducers = combineReducers<ReduxState>({
  pokemon: pokemonsSlice.reducer,
});

const persistenceReducer = persistReducer<ReduxState>(
  persistConfig,
  allReducers
);

export const store = configureStore<ReduxState & PersistPartial>({
  reducer: persistenceReducer,
  middleware: [thunk],
});
export const dataStore = persistStore(store);
