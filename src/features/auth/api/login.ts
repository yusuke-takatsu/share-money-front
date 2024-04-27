import { axios } from '@/lib/axios/axios';
import { useErrorHandle } from '@/utils/hooks/useErrorHandle';
import React from 'react';

interface Request {
  email: string;
  password: string;
}

export const useUserLogin = () => {
  const { isResponseError } = useErrorHandle();

  const userLogin = async (request: Request) => {
    try {
      const res = await axios.post('login', request);
    } catch (error) {
      if (isResponseError(error)) return false;
    }

    return true;
  };

  return { userLogin };
};
