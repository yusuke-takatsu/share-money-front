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
  return <Root>{children}</Root>;
};

export default AppTemplate;
