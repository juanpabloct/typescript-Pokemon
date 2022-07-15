import { useState } from "react";
import { typesPokemon } from "Variables";

export function SearchTypes({ onFilter }: any) {
  const [selection, setSelection] = useState("");

  return (
    <select
      value={selection}
      className="filter"
      onChange={(e) => {
        setSelection(e.target.value);
        onFilter({ type: e.target.value });
      }}
    >
      <option value="" disabled>
        Search For Type
      </option>
      {typesPokemon.map((type, index) => (
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
