import { isErrorResponse } from '../types/error';
import { useSnackBar } from './useSnackbar';

export const useErrorHandle = () => {
  const { handleSnackBar } = useSnackBar();

  const isResponseError = (error: unknown) => {
    if (isErrorResponse(error)) {
      handleSnackBar(error);

      return true;
    }

    return false;
  };

  return { isResponseError };
};
