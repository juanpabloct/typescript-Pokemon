import { useState } from "react";
export function SearchTypes({ onFilter }: any) {
  const allTypes = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];
  const [selection, setSelection] = useState("");

  return (
    <select
      value={selection}
      style={{
        zIndex: "30",
      }}
      onChange={(e) => {
        setSelection(e.target.value);
        onFilter({ type: e.target.value });
      }}
    >
      <option value="" disabled>
        Select one
      </option>
      {allTypes.map((type, index) => (
        <option
          key={index}
          id=""
          style={{ textTransform: "capitalize" }}
          value={type}
        >
          {type}
        </option>
      ))}
    </select>
  );
}
