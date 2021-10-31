import { IRegister } from 'models/register.models';
import { API_PREFIX } from '@shared/constants/api-prefixs.constants';
import { toJsonCase } from "@shared/utils/toJsonCase.utils";
import get from "lodash/get";

import axios from 'axios';
const api = axios.create();

const BASE_URL = `http://localhost:5000`

const app = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Authorization: "Bearertoken"
    // "X-localization": localStorage.getItem("example")
  },
  validateStatus: (status) => {
    return true; // I'm always returning true, you may want to do it depending on the status received
  },
});

app.interceptors.response.use(
  response => response,
  error => {
    const err = get(error, ["response", "data", "err", "error"]);

    return err ? Promise.reject(err) : Promise.reject(error.message);
  }
);

export const POST_REGISTER = async (data:IRegister) => {
  // try{
    const body = toJsonCase(data);
    const response = app.post(`auth/signup`, body, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
    // .then(error => console.log(error));
    // const response = await axios.request({
    //   method: 'POST',
    //   url: `${BASE_URL}/${API_PREFIX.AUTH}/signup`,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: {
    //     next_swastik: 'lets add something here'
    //   },
    
    // })
    
    return response;
  // }catch(ex){
  //   return ex;
  // }

}