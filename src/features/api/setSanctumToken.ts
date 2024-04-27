import { axios } from '@/lib/axios/axios';
import { STATUS_CODE } from '@/utils/constants/statusCode';

export const useSetSanctumToken = () => {
  const setSanctumToken = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_SANCTUM_URL);

    if (res.status === STATUS_CODE.NO_CONTENT) return true;

    return false;
  };

  return { setSanctumToken };
};
