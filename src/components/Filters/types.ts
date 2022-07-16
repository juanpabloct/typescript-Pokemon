import { PokemonFilter } from "types/store";

export type OnFilter = (value: Partial<PokemonFilter>) => void;
