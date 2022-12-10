import { graphqlRequest } from "../../services/reactQuery/client";
import { useMutation } from "@tanstack/react-query";

import { type AuthUserInput } from "../../graphql/generated/graphql";
import { authUserMutation } from "../../graphql/mutations/user";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: AuthUserInput) => {
      return await graphqlRequest.request(authUserMutation, { data });
    },
  });
};
