import { pokemonFilter, showDataPagina } from "actions/actions";
import { useGetData } from "conection/useGetData";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchGeneration } from "./SearchGeneration";
import { SearchName } from "./SearchName";
import { OnFilter } from "./types";
import { SearchTypes } from "./SearchType";
import { client } from "../../conection/client";
import { ReduxState, TypePokemonData } from "types/store";

export function Filters() {
  const dispatch = useDispatch();
  const getData = useGetData();
  const { data } = useSelector((state: ReduxState) => state.pokemon);
  const { filter } = useSelector((state: ReduxState) => state.pokemon);
  const onFilter = useCallback<OnFilter>(
    (value) => {
      dispatch(pokemonFilter(value));
      if (value.generation) {
        getData("generation/generation-" + value.generation);
        console.log(value);
      } else if (!value.generation && value.name) {
        const url: string = `pokemon/${value.name}`;
        getData(url);
      } else {
        if (value.type?.length > 0 && filter.generation?.length === 0) {
          const url: string = `type/${value.type}`;
          const data = async () => {
            console.log();

            const getTypePokemon: any = await client
              .get(url)
              .then((values) => values.data.pokemon);
            getData("getTypePokemon", getTypePokemon);
          };
          data();
        } else {
          const typeData: any = [];
          data.map((state: any) => {
            return state.types.map((type: any) => {
              if (type.type.name === value.type) {
                typeData.push(state);
                return state;
              }
            });
          });
          dispatch(showDataPagina(typeData));
        }
      }
    },
    [dispatch, getData]
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "3rem",
      }}
    >
      <SearchGeneration onFilter={onFilter} />
      <SearchTypes onFilter={onFilter} />
      <SearchName onFilter={onFilter} />
    </div>
  );
}
