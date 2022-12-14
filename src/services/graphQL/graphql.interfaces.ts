import { type ParseCookiesContext } from 'nookies';

export interface IGraphQLRequestClientOptions {
  ctx?: ParseCookiesContext;
}

export type GraphQLRequestClientError = {
  message: string;
  statusCode: number;
  error: string;
};
