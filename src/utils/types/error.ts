export type ErrorResponse = {
  data: {
    errors: [] | undefined;
    message: string;
  };
  status: number;
};

export const isErrorResponse = (error: unknown): error is ErrorResponse => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'data' in error &&
    typeof (error as ErrorResponse).data.message === 'string'
  );
};
