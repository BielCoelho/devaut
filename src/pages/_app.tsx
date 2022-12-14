import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { type AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from 'services/react-query';
import { AuthProvider } from 'contexts/Auth';
import { GlobalStyle } from 'styles/globals';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider initialUser={pageProps?.initialUserState}>
          <ToastContainer />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthProvider>
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
