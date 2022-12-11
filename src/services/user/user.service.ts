import { meQuery } from 'graphql/mutations/user';

import { graphQLAuthClient } from 'services/react-query';

class UserService {
  async getMe() {
    return await graphQLAuthClient.request(meQuery);
  }
}

export const userService = new UserService();
