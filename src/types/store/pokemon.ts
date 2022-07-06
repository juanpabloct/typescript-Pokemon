export enum Generations {
  i = "i",
  ii = "ii",
  iii = "iii",
  iv = "iv",
  v = "v",
  vi = "vi",
  vii = "vii",
  viii = "viii",
}

export interface PokemonFilter {
  generation: Generations | null;
  name: string;
}

export interface PokemonState {
  filter: PokemonFilter;
  data?: PokemonStateData;
  users: never[];
  loginUser: {
    user: string;
    password: string;
  };
}

export interface PokemonStateData {
  abilities: any[];
  id: number;
  main_region: PokemonData;
  moves: PokemonData[];
  name: string;
  names: Name[];
  pokemon_species: PokemonData[];
  types: PokemonData[];
  version_groups: PokemonData[];
}

export interface PokemonData {
  name: string;
  url: string;
}

export interface Name {
  language: PokemonData;
  name: string;
}
