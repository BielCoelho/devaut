import { type GetServerSidePropsContext } from 'next';

import { QueryClient } from '@tanstack/react-query';

import { GraphQLClient } from 'graphql-request';

import { parseCookies } from 'nookies';
import { envs } from 'constants/envs';

export const queryClient = new QueryClient();

export const graphQLRequest = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);

export const getGraphQLAuthClient = (ctx?: GetServerSidePropsContext) => {
  const cookies = parseCookies(ctx);
  const token = cookies[envs.AUTH_COOKIE];
  return new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, {
    headers: {
      authorization: token,
    },
  });
};

export const graphQLAuthClient = getGraphQLAuthClient();
