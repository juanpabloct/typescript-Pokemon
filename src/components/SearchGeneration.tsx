import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterGeneration } from "../actions/actions"
import { api } from "../conection/conection"
import { GetData } from "../conection/getData"

export function SearchGeneration() {
    const dispatch=useDispatch()
    const value=useSelector((state :any)  =>state.filter)
    const pokemons=useSelector((state :any)  =>state.data)
  useEffect(()=>{
      if(value.generation.length >0){
          GetData(value.generation, dispatch)
        }
        else if(value.generation.length ===0 && value.name.length >0){
            const url:string=`${api}pokemon/${value.name}`
            
            GetData(url, dispatch)
        }
    }, [value])
        
    return (
        <select name="" id="" onChange={(e)=>{dispatch(filterGeneration(e.target.value))}
        }>
            <option value="generation/generation-i/">Generation 1</option>
            <option value="generation/generation-ii/">Generation 2</option>
            <option value="generation/generation-iii/">Generation 3</option>
            <option value="generation/generation-iv/">Generation 4</option>
            <option value="generation/generation-v/">Generation 5</option>
            <option value="generation/generation-vi/">Generation 6</option>
            <option value="generation/generation-vii/">Generation 7</option>
            <option value="generation/generation-viii/">Generation 8</option>
        </select>
    )
}