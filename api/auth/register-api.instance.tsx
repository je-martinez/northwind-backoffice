import { IRegister } from '@pages/sign-up/models/register.models';
import { API_PREFIX } from '@shared/constants/api-prefixs.constants';
import { toJsonCase } from "@shared/utils/toJsonCase.utils";

import axios from 'axios';
const api = axios.create();

const BASE_URL = `http://localhost:5000`

export const POST_REGISTER = async (data:IRegister) => {
  try{
    const body = toJsonCase(data);
    const response = await api.post(`${BASE_URL}/${API_PREFIX.AUTH}/signup`, body, {
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(data => data)
    .catch(error => error);
    return response;
  }catch(ex){
    return ex;
  }

}