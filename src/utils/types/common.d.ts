import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type PageLayoutType = 'auth' | 'none';

type NextPageWithLayout = NextPage & {
  layout: PageLayoutType;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type OptionProps = {
  value: number;
  label: string;
};
