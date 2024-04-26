import AuthLayout from '@/components/Layouts/AuthLayout';
import CustomLayout from '@/components/Layouts/CustomLayout';
import { PageLayoutType } from '@/utils/types/common';
import React, { ReactNode } from 'react';

interface Props  {
  children: ReactNode;
  layout: PageLayoutType;
};

const AppLayout = ({ children, layout }: Props) => {
  switch (layout) {
    case 'auth':
      return <AuthLayout>{children}</AuthLayout>;
    case 'none':
      return children;
    default:
      return <CustomLayout>{children}</CustomLayout>;
  }
};

export default AppLayout;
