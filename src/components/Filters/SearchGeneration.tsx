import { Generations } from "types/store";
import { OnFilter } from "./types";
interface SearchGenerationProps {
  onFilter: OnFilter;
}

export function SearchGeneration({ onFilter }: SearchGenerationProps) {
  return (
    <select
      className="filter"
      name=""
      id=""
      onChange={({ target: { value } }) => {
        const generation = Generations[value as Generations];
        onFilter({ generation });
      }}
    >
      <option disabled selected className="optionDisabled">
        Search for Generation
      </option>
      <option value={Generations.i}>Generation 1</option>
      <option value={Generations.ii}>Generation 2</option>
      <option value={Generations.iii}>Generation 3</option>
      <option value={Generations.iv}>Generation 4</option>
      <option value={Generations.v}>Generation 5</option>
      <option value={Generations.vi}>Generation 6</option>
      <option value={Generations.vii}>Generation 7</option>
      <option value={Generations.viii}>Generation 8</option>
    </select>
  );
}
