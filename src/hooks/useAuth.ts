import axios from '@/lib/axios';
import { deleteCookie, setCookie } from '@/lib/cookie';

import { useStore } from '@/store';

import {
  IForgotPassword,
  ILogin,
  IRegister,
  IResetPassword,
} from '@/types/auth';

export const useAuth = () => {
  const fetchUser = async () => {
    const isServer = typeof window === 'undefined';

    try {
      const { data } = await axios.get('/auth/user');
      useStore.setState({ auth: data });

      return data;
    } catch {
      useStore.setState({ auth: null });

      if (!isServer) {
        deleteCookie('auth.__token');
      }
    }

    return null;
  };

  const login = async (params: ILogin) => {
    try {
      const { data } = await axios.post('/auth/login', params);
      setCookie('auth.__token', data.token);
      await fetchUser();

      // NOTE: Refresh router after logout to refresh all data
    } catch (e) {
      throw e;
    }
  };

  const register = async (params: IRegister) => {
    try {
      await axios.post('/auth/register', params);
      console.log('register success');
      await login({ email: params.email, password: params.password });
    } catch (e) {
      throw e;
    }
  };

  const forgotPassword = async (params: IForgotPassword) => {
    try {
      await axios.post('/auth/password/forgot', params);
    } catch (e) {
      throw e;
    }
  };

  const resetPassword = async (url: string, params: IResetPassword) => {
    try {
      await axios.post(url, params);
    } catch (e) {
      throw e;
    }
  };

  const resendEmailVerification = async () => {
    try {
      await axios.post('/auth/email/verify/resend');
    } catch {}
  };

  const verifyEmail = async (url: string) => {
    try {
      await axios.get(url);
      await fetchUser();
      return true;
    } catch {
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/auth/logout');
      deleteCookie('auth.__token');
      useStore.setState({ auth: null });

      // NOTE: Refresh router after logout to refresh all data
    } catch {}
  };

  return {
    user: useStore.getState().auth,
    loggedIn: !!useStore.getState().auth,
    isEmailVerified: !!useStore.getState()?.auth?.user?.email_verified_at,
    fetchUser,
    login,
    register,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    verifyEmail,
    logout,
  };
};
