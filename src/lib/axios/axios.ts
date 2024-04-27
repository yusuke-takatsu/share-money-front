import { COOKIE_KEY_NAMES } from '@/utils/constants/variable';
import Axios, { AxiosError } from 'axios';

export const axios = Axios.create({
  xsrfCookieName: COOKIE_KEY_NAMES.XSRF_TOKEN,
  xsrfHeaderName: COOKIE_KEY_NAMES.X_XSRF_TOKEN,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-with': 'XMLHttpRequest',
  },
  withCredentials: true,
  withXSRFToken: true,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error.response);
  }
);
