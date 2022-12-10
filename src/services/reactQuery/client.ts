import { QueryClient } from "@tanstack/react-query";

import { GraphQLClient } from "graphql-request";

export const queryClient = new QueryClient();

export const graphqlRequest = new GraphQLClient(
  "http://localhost:4000/graphql"
);
