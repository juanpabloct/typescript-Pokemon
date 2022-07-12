import { OnFilter } from "./types";

interface SearchNameProps {
  onFilter: OnFilter;
}

export function SearchName({ onFilter }: SearchNameProps) {
  return (
    <input
      type={"text"}
      style={{
        zIndex: "30",
      }}
      onKeyDown={(e: any) => {
        if (e.key === "Enter") onFilter({ name: e.target.value });
      }}
    />
  );
}
