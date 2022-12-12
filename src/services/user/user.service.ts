import { meQuery } from 'graphql/mutations/user';

import { envs } from 'constants/envs';
import { parseCookies } from 'nookies';
import { getGraphQLAuthClient, graphQLAuthClient } from 'services/graphQL';

class UserService {
  async getMe() {
    const hasToken = parseCookies()[envs.AUTH_COOKIE];

    if (!hasToken) return { token: null, user: null };
    return (await graphQLAuthClient.request(meQuery)).me;
  }

  async getSSRMe(ctx?: Parameters<typeof getGraphQLAuthClient>[0]) {
    if (!ctx) throw new Error('No context provided');
    const hasToken = parseCookies(ctx)[envs.AUTH_COOKIE];

    if (!hasToken) return { token: null, user: null };

    return (await getGraphQLAuthClient(ctx).request(meQuery)).me;
  }
}

export const userService = new UserService();
