import axios from 'axios';

export const productServices = () =>{
    return axios.get('https://localhost:7200/api/ProductLines')
}