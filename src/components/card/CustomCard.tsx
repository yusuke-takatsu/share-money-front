import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

const Container = styled('div')`
  background-color: #fff;
  border-radius: 1.5rem;
  max-width: 732px;
  width: 100%;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  margin: 6rem auto;
  padding: 48px 24px;
`;

const Title = styled('h2')`
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  color: black;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
`;

const Content = styled('div')`
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
`;

interface Props {
  title: string;
  children: ReactNode;
}

const CustomCard = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default CustomCard;
