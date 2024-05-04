import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Header } from '@/components/header/Header';

const Wrapper = styled('div')`
  padding-top: 75px;
  padding-bottom: 75px;
`;

const Main = styled('main')`
  position: relative;
`;

interface Props {
  children: ReactNode;
}

export const CustomLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
};
