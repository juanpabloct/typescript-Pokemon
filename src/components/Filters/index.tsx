import { changeDataPagination, pokemonFilter } from "actions/actions";
import { useGetData } from "conection/useGetData";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchGeneration } from "./SearchGeneration";
import { SearchName } from "./SearchName";
import { OnFilter } from "./types";
import { SearchTypes } from "./SearchType";
import { client } from "../../conection/client";
import { ReduxState } from "types/store";

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
      } else if (!value.generation && value.name) {
        const url: string = `pokemon/${value.name}`;
        getData(url);
      } else {
        if (value.type?.length > 0 && filter.generation?.length === 0) {
          const url: string = `type/${value.type}`;
          const data = async () => {
            const getTypePokemon: any = await client
              .get(url)
              .then((values) => values.data.pokemon);
            getData("getTypePokemon", getTypePokemon);
          };
          data();
        } else {
          const allFilters: any = [];
          data.map((state: any, index: number) => {
            return state?.types?.forEach((type: any): any => {
              if (type.type.name === value.type) {
                allFilters.push(state);
              }
            });
          });
          if (allFilters.length > 0) {
            dispatch(changeDataPagination({ page: 1, results: allFilters }));
          }
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
      <SearchName onFilter={onFilter} />
      <SearchGeneration onFilter={onFilter} />
      <SearchTypes onFilter={onFilter} />
    </div>
  );
}
