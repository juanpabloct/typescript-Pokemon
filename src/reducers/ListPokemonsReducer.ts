import { types } from "../types/types";

const initialState = {
  get_pokemon: [],
};

const ListPokemonsReducer = (state = initialState, actions: any) => {
  switch (actions.type) {
    case types.GET_POKEMEMONS:
      return {};
      break;

    default:
      break;
  }
};
