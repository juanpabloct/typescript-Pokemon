import { useDispatch } from "react-redux";

import { client } from "./client";
import { changeData } from "../actions/actions";

export function useGetData() {
  const dispatch = useDispatch();
  return async (url: string) => {
    const data = await client
      .get(url)
      .then((values) => dispatch(changeData({ results: values.data })));
    return data;
  };
}
