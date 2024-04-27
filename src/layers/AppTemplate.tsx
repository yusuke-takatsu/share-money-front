import { BasicSnackBar } from '@/components/snackBar/BasicSnackBar';
import { useSnackBar } from '@/utils/hooks/useSnackbar';
import { bgColor } from '@/utils/themeClient';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

const Root = styled('div')`
  background-color: ${bgColor.gray};
  min-height: 100dvh;
  min-width: 100vw;
`;

interface Props {
  children: ReactNode;
}

const AppTemplate = ({ children }: Props) => {
  const { snackBar, closeSnackBar } = useSnackBar();

  return (
    <>
      {snackBar.isOpen && (
        <BasicSnackBar snackbar={snackBar} onClose={closeSnackBar} />
      )}
      <Root>{children}</Root>
    </>
  );
};

export default AppTemplate;
