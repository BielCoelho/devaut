import { authUserMutation, meQuery } from 'graphql/mutations/user';
import { type AuthUserInput } from 'graphql/generated/graphql';

import { envs } from 'constants/envs';
import { parseCookies, type ParseCookiesContext } from 'nookies';
import { getGraphQLRequestClient, graphQLRequestClient } from 'services/graphQL';

export class UserService {
  private async getMeRequest(ctx?: ParseCookiesContext) {
    try {
      const hasToken = parseCookies(ctx)[envs.AUTH_COOKIE];
      if (!hasToken) throw new Error('No token provided');

      if (ctx) {
        const response = await getGraphQLRequestClient(ctx).request(meQuery);
        return response.me;
      } else {
        const response = await graphQLRequestClient.request(meQuery);
        return response.me;
      }
    } catch (err) {
      const error = err as Error;
      throw new Error(error.message);
    }
  }
  async getMe() {
    const res = await this.getMeRequest();
    return res;
  }

  async getSSRMe(ctx?: ParseCookiesContext) {
    if (!ctx) throw new Error('No context provided');
    const res = await this.getMeRequest(ctx);
    return res;
  }

  async login(data: AuthUserInput) {
    return await graphQLRequestClient.request(authUserMutation, { data });
  }
}

export const userService = new UserService();
