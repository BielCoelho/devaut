import { QueryClient } from '@tanstack/react-query';

import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'graphql/generated';

import { envs } from 'constants/envs';
import { type ParseCookiesContext } from 'nookies';
import { getActiveToken } from 'services/auth';

const gqlClient = new GraphQLClient(envs.API_URL, {
  headers: { authorization: getActiveToken() },
});
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const { authUserMutation, createUserMutation, meQuery, createChildMutation } =
  getSdk(gqlClient);

export const getSSRSdk = (ctx: ParseCookiesContext) => {
  const token = getActiveToken(ctx);

  const gqlClient = new GraphQLClient(envs.API_URL, {
    headers: { authorization: token },
  });

  return getSdk(gqlClient);
};
