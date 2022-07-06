import { useDispatch } from "react-redux";

import { client } from "./client";
import { changeData, changeDataPagination } from "../actions/actions";

export function useGetData() {
  const dispatch = useDispatch();
  return async (url: string) => {
    if (url.includes("pokemon")) {
      const urlLowerCase = url.toLowerCase();
      const data = await client.get(urlLowerCase).then((values) => values.data);
      dispatch(changeData({ results: data }));

      return data;
    } else {
      const data: any = await client.get(url).then((values) => values.data);
      const allValues: any = [];
      data.pokemon_species.map((nombre: any, index: number) => {
        const values = async () => {
          const getDataPokemon = await client
            .get("pokemon/" + nombre.name)
            .then((data) => data.data)
            .catch(() => {});
          allValues.push(getDataPokemon);
          if (index === data.pokemon_species.length - 1) {
            dispatch(changeData({ results: allValues }));
            dispatch(changeDataPagination({ page: 1 }));
          }
        };
        return values();
      });
    }
  };
}
