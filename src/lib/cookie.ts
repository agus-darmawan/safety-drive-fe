import {
    deleteCookie as destroy,
    getCookie as get,
    setCookie as set,
  } from 'cookies-next';
  
  export const setCookie = (
    key: string,
    value: any,
    args = {
      maxAge: 31536000,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    }
  ) => {
    set(key, value, args);
  };
  
  export const getCookie = (key: string, options?: {}) => {
    return get(key, options);
  };
  
  export const deleteCookie = (key: string, options?: {}) => {
    return destroy(key, options);
  };
  