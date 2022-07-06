import { pokemonFilter } from "actions/actions";
import { useGetData } from "conection/useGetData";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SearchGeneration } from "./SearchGeneration";
import { SearchName } from "./SearchName";
import { OnFilter } from "./types";

export function Filters() {
  const dispatch = useDispatch();
  const getData = useGetData();
  const onFilter = useCallback<OnFilter>(
    (value) => {
      dispatch(pokemonFilter(value));
      if (value.generation) {
        getData("generation/generation-" + value.generation);
      } else if (!value.generation && value.name) {
        const url: string = `pokemon/${value.name}`;

        getData(url);
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
      <SearchName onFilter={onFilter} />
    </div>
  );
}
