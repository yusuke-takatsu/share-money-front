import { snackBarAtom } from '@/lib/stores/snackBar';
import { useAtom } from 'jotai';
import { ErrorResponse } from '../types/error';

export const useSnackBar = () => {
  const [snackBar, setSnackBar] = useAtom(snackBarAtom);

  const closeSnackBar = () => {
    setSnackBar((prev) => ({
      isOpen: false,
      status: prev.status,
      message: '',
    }));
  };

  const openSnackBar = (params: { status: number; message: string }) => {
    const { status, message } = params;

    setSnackBar({
      isOpen: true,
      status: status,
      message: message,
    });

    setTimeout(() => {
      closeSnackBar();
    }, 5000);
  };

  const handleSnackBar = (error: ErrorResponse) => {
    if (error.data.errors) {
      openSnackBar({
        status: error.status,
        message: error.data.errors.join('\n'),
      });
    } else {
      openSnackBar({
        status: error.status,
        message: error.data.message,
      });
    }
  };

  return { snackBar, closeSnackBar, openSnackBar, handleSnackBar };
};
