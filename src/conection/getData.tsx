import { api } from "./conection";
import { changeData } from "../actions/actions";
import axios from "axios";
export function GetData(url: string, dispatch: any) {
  const data = axios
    .get(api + url)
    .then((values) => dispatch(changeData({ results: values.data })));
}
