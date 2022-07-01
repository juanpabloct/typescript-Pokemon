import { api } from './conection';
import axios from 'axios';
import { changeData } from '../actions/actions';
export function GetData(url:string, dispatch:any){
    const data=axios.get(api+url).then(values=>dispatch(changeData({results:values.data})))
}



