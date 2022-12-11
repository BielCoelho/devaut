import { useMutation, useQuery } from '@tanstack/react-query';

import { type AuthUserInput } from 'graphql/generated/graphql';
import { authUserMutation, meQuery } from 'graphql/mutations/user';

import { graphQLAuthClient, graphQLRequest } from 'services/react-query';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: AuthUserInput) => {
      return await graphQLRequest.request(authUserMutation, { data });
    },
  });
};

export const useMe = () => {
  return useQuery({
    queryKey: ['meDeita'],
    queryFn: async () => {
      return await graphQLAuthClient.request(meQuery);
    },
    staleTime: 1000 * 60 * 5, //5 min
  });
};
