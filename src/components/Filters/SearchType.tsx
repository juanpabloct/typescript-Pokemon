import { useState } from "react";
import { typesPokemon } from "Variables";

import "./styles/filters.css"

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
        Select one
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
