import { GraphQLClient } from 'graphql-request';

import { envs } from 'constants/envs';
import { parseCookies } from 'nookies';

export const graphQLRequest = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);

export const getGraphQLAuthClient = (ctx?: ParseCookiesContext) => {
  const cookies = parseCookies(ctx);
  const token = cookies[envs.AUTH_COOKIE];
  return new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, {
    headers: {
      authorization: token,
    },
  });
};

export const graphQLAuthClient = getGraphQLAuthClient();
