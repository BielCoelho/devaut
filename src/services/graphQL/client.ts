import { GraphQLClient } from 'graphql-request';

import { type ParseCookiesContext } from 'nookies';

import { GraphQLRequestClient } from './graphql.service';

export const graphQLRequest = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);

export const getGraphQLRequestClient = (ctx?: ParseCookiesContext) => {
  return new GraphQLRequestClient({ ctx });
};

export const graphQLRequestClient = getGraphQLRequestClient();
