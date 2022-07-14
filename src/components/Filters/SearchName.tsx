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
        width:"18%",
        borderRadius:"30px",
        border:"none"
      }}
      onKeyDown={(e: any) => {
        if (e.key === "Enter") onFilter({ name: e.target.value });
      }}
    />
  );
}
