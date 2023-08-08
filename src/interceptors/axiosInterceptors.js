import axios from 'axios';

export const AxiosInterceptors = () =>{
    axios.interceptors.response.use((response) => {
        console.log('Starting request', response);
        return response;
    });
};