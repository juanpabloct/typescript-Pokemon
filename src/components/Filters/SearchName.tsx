import { OnFilter } from "./types";

interface SearchNameProps {
  onFilter: OnFilter;
}

export function SearchName({ onFilter }: SearchNameProps) {
  return (
    <input
      type={"text"}
      placeholder={"Name"}
      className={"textName"}
      onKeyDown={(e: any) => {
        if (e.key === "Enter") onFilter({ name: e.target.value });
      }}
    />
  );
}
