import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const CustomLayout = ({ children }: Props) => {
  return <div>テスト</div>;
};

export default CustomLayout;
