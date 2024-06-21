import Axios from 'axios';

import { getCookie } from '@/lib/cookie';

import { toast } from '@/components/ui/use-toast';

const isServer = typeof window === 'undefined';

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    const token = getCookie('auth.__token', { cookies });

    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }
  } else {
    const token = getCookie('auth.__token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response?.data) {
      if (response.data?.success) {
        toast({
          variant: 'success',
          title: response.data.success,
        });
      }

      if (response.data?.error) {
        toast({
          variant: 'error',
          title: response.data.error,
        });
      }
    }
    return response;
  },
  (error) => {
    if (error?.response?.status !== 401 && error?.response?.data?.errors) {
      const obj = error.response.data.errors;
      if (obj.length) {
        toast({
          variant: 'error',
          title: obj[0].message,
        });
      }
    }

    if (error?.response?.data?.error) {
      toast({
        variant: 'error',
        title: error.response.data.error,
      });
    }

    if (error?.response?.status !== 401 && error?.response?.data?.message) {
      toast({
        variant: 'error',
        title: error.response.data.message,
      });
    }

    return Promise.reject(error);
  }
);

export default axios;
