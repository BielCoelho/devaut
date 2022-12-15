import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { type AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from 'services/api';
import { GlobalStyles } from 'styles/globals';
import { AuthProvider } from 'contexts/Auth';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Component {...pageProps} />
            <ToastContainer theme="dark" />
            <GlobalStyles />
          </AuthProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
