import { atom } from 'jotai';

export type SnackBar = {
  isOpen: boolean;
  status: number;
  message: string;
};

export const snackBarInitValue: SnackBar = {
  isOpen: false,
  status: 200,
  message: '',
};

export const snackBarAtom = atom(snackBarInitValue);
