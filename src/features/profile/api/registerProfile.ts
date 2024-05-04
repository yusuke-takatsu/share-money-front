import { useErrorHandle } from '@/utils/hooks/useErrorHandle';
import { ProfileRegisterForm } from '../hooks/schema';
import { axios } from '@/lib/axios/axios';

export const registerProfile = () => {
  const { isResponseError } = useErrorHandle();

  const registerProf = async (request: ProfileRegisterForm) => {
    try {
      const res = await axios.post('profile', request);
    } catch (error) {
      if (isResponseError(error)) return false;
    }

    return true;
  };

  return { registerProf };
};
