import { useMutation } from '@tanstack/react-query';

import { type AuthUserInput } from 'graphql/generated/graphql';
import { authUserMutation } from 'graphql/mutations/user';

import { graphqlRequest } from 'services/react-query';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: AuthUserInput) => {
      return await graphqlRequest.request(authUserMutation, { data });
    },
  });
};
