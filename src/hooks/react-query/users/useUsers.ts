import { useMutation, useQuery } from '@tanstack/react-query';

import { type AuthUserInput } from 'graphql/generated/graphql';
import { authUserMutation } from 'graphql/mutations/user';

import { graphQLRequest } from 'services/graphQL';
import { userService } from 'services/user';

import { type IUseMeQueryProps } from './useUsers.interfaces';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: AuthUserInput) => {
      return await graphQLRequest.request(authUserMutation, { data });
    },
  });
};

export const useMe = (params?: IUseMeQueryProps) => {
  return useQuery({
    queryKey: ['user_session'],
    queryFn: userService.getMe,
    refetchOnWindowFocus: true,
    initialData: params?.initialState,
    staleTime: 1000 * 60 * 5, // 5 min
  });
};
