import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { theme } from '@/utils';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MUIThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MUIThemeProvider>
  );
}
