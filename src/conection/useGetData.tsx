import { useDispatch, useSelector } from 'react-redux';

import { client } from "./client";
import { changeData, changeDataPagination } from "../actions/actions";
import { ReduxState } from '../types/store/index';

export function useGetData() {
  const dispatch = useDispatch();
  const {filter}=useSelector((state:ReduxState)=>state.pokemon)
  return async (url: string, data:any=[]) => {
    
    if (url.includes("pokemon")) {    
      console.log('dhdfdf');
        
      const urlLowerCase = url.toLowerCase();
      const data = await client.get(urlLowerCase).then((values) => values.data);
      dispatch(changeData({ results: data }));

      return data;
    } else if(url.includes('generation/generation-')){      
      const data: any = await client.get(url).then((values) => values.data);
      const allValues: any = [];
      data.pokemon_species.map((nombre: any, index: number) => {
        const values = async () => {
          const getDataPokemon = await client
            .get("pokemon/" + nombre.name)
            .then((data) => data.data)
            .catch(() => {});
          allValues.push(getDataPokemon);
          
          if (index === data.pokemon_species.length - 1) {
            dispatch(changeData({ results: allValues }));
            dispatch(changeDataPagination({ page: 1 }));
          }
        };
        return values();
      });
    }
    else{
      console.log(data);
      
      const allValues: any = [];      
      data.map((nombre: any, index: number) => {
        const values = async () => {
          const getDataPokemon = await client
            .get("pokemon/" + nombre.pokemon.name)
            .then((data) => data.data)
            .catch(() => {});
          allValues.push(getDataPokemon);
          if (index === data.length - 1) {
            dispatch(changeData({ results: allValues }));
            dispatch(changeDataPagination({ page: 1 }));
          }
        };
        return values();
    })
}
  }}