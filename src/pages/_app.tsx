import '../styles/globals.css';

import React from 'react';
import { type AppProps } from 'next/app';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { type User } from 'graphql/generated/graphql';

import { queryClient } from 'services/react-query';
import { AuthProvider } from 'contexts/Auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider initialUser={pageProps?.initialUserState as User}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
