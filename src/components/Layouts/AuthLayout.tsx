import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

const Layout = styled('div')`
  display: grid;
  height: 100dvh;
`;

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return <Layout>test</Layout>;
};

export default AuthLayout;
