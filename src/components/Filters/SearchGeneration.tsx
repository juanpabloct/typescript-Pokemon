import { useSelector } from "react-redux";
import { Generations, ReduxState } from "types/store";
import { OnFilter } from "./types";

interface SearchGenerationProps {
  onFilter: OnFilter;
}

export function SearchGeneration({ onFilter }: SearchGenerationProps) {
  const pokemons = useSelector((state: ReduxState) => state.pokemon.data);
  console.log(pokemons);

  return (
    <select
      name=""
      id=""
      onChange={({ target: { value } }) => {
        const generation = Generations[value as Generations];
        onFilter({ generation });
      }}
    >
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
