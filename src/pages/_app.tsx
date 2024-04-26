import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { theme } from '@/utils';
import AppLayout from '@/layers/AppLayout';
import { AppPropsWithLayout } from '@/utils/types/common';
import AppTemplate from '@/layers/AppTemplate';

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  return (
    <MUIThemeProvider theme={theme}>
      <AppTemplate>
        <AppLayout layout={Component.layout}>
          <Component {...pageProps} />
        </AppLayout>
      </AppTemplate>
    </MUIThemeProvider>
  );
}
