import { pokemonFilter } from "actions/actions";
import { useGetData } from "conection/useGetData";
import { useCallback, useState } from 'react';
import { useDispatch } from "react-redux";
import { SearchGeneration } from "./SearchGeneration";
import { SearchName } from "./SearchName";
import { OnFilter } from './types';
import { SearchTypes } from './SearchType';
import { client } from '../../conection/client';

export function Filters() {
  const dispatch = useDispatch();  
  const getData = useGetData();
  const onFilter = useCallback<OnFilter>(
    (value) => {
      dispatch(pokemonFilter(value));
      
      if (value.generation) {
        getData("generation/generation-" + value.generation);
      } else if (!value.generation && value.name) {
        const url: string = `pokemon/${value.name}`;

        getData(url);
      }
      else{        
        const url: string = `type/${value.type}`;
        const data = async ()=>{
          console.log();
          
          const getTypePokemon:any=await client.get(url).then((values) => values.data.pokemon  )
          console.log(getTypePokemon);
          
          getData('getTypePokemon', getTypePokemon)
        }
        data()
        
      }
    },
    [dispatch, getData]
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "3rem",
      }}
    >
      <SearchGeneration onFilter={onFilter} />
      <SearchTypes onFilter={onFilter}/>
      <SearchName onFilter={onFilter} />
    </div>
  );
}
