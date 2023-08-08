import React from 'react';
import { AxiosInterceptors } from './interceptors/axiosInterceptors';
import { AppRouter } from './routers/AppRouter';
AxiosInterceptors()

export const Now = () => {
    return (
          <AppRouter />  
    )
}
