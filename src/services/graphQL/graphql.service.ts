import { type TypedDocumentNode } from '@graphql-typed-document-node/core';

import { GraphQLClient, type RequestDocument, type Variables } from 'graphql-request';
import { type VariablesAndRequestHeaders } from 'graphql-request/dist/types';

import { envs } from 'constants/envs';
import { parseCookies } from 'nookies';

import {
  type GraphQLRequestClientError,
  type IGraphQLRequestClientOptions,
} from './graphql.interfaces';

export class GraphQLRequestClient {
  private client: GraphQLClient;
  private token?: string;
  private ctx?: IGraphQLRequestClientOptions['ctx'];

  constructor({ ctx }: IGraphQLRequestClientOptions) {
    this.ctx = ctx;
    const cookies = parseCookies(ctx);

    if (this.ctx) {
      this.token = cookies[envs.AUTH_COOKIE];
    }

    this.client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, {
      errorPolicy: 'none',
      headers: {
        authorization: cookies[envs.AUTH_COOKIE],
      },
    });
  }

  request<T, V extends Variables = Variables>(
    document: RequestDocument | TypedDocumentNode<T, V>,
    ...variables: VariablesAndRequestHeaders<V>
  ): Promise<T> {
    return this.makeRequest<T, V>(document, variables);
  }

  private async makeRequest<T, V extends Variables = Variables>(
    document: RequestDocument | TypedDocumentNode<T, V>,
    variables: VariablesAndRequestHeaders<V>
  ): Promise<T> {
    try {
      const response = await this.client.request(document, ...variables);
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error = err?.response?.errors as GraphQLRequestClientError[];
      const statusError = error?.[0]?.statusCode;
      const messageError = error?.[0]?.message;
      const errorMessage = error?.[0]?.error;

      const formattedError = `
        ${statusError ? `Status: ${statusError};` : ''}
        ${messageError ? `\nMessage: ${messageError};` : ''}
        ${errorMessage ? `\nError: ${errorMessage};` : ''}
        `;

      throw new Error(formattedError, { cause: errorMessage });
    }
  }
}
