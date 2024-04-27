import { bgColor } from '@/utils/themeClient';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import AuthCard from '../card/AuthCard';

const Layout = styled('div')`
  display: grid;
  height: 100dvh;
`;

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Layout>
      <AuthCard>{children}</AuthCard>
    </Layout>
  );
};

export default AuthLayout;
