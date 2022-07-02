import { type } from "os";
import { useDispatch } from "react-redux";
import { filterName } from "../actions/actions";
export function SearchName() {
  const dispatch = useDispatch();
  return (
    <input
      type={"text"}
      onKeyDown={(e: any) => {
        dispatch(filterName(e.target.value));
      }}
    />
  );
}
