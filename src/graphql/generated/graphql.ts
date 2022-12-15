import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Child = {
  __typename?: 'Child';
  active: Scalars['Boolean'];
  birthday: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  gender: GenderEnum;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateChildInput = {
  active: Scalars['Boolean'];
  birthday: Scalars['DateTime'];
  gender: GenderEnum;
  name: Scalars['String'];
};

export type CreateUser = {
  __typename?: 'CreateUser';
  token: Scalars['String'];
  user: User;
};

export type CreateUserInput = {
  birthday: Scalars['DateTime'];
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  gender: GenderEnum;
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

/** Available Genders types enum */
export enum GenderEnum {
  Female = 'FEMALE',
  Male = 'MALE',
  NotInformed = 'NOT_INFORMED',
}

export type Mutation = {
  __typename?: 'Mutation';
  authUser: CreateUser;
  createChild: Child;
  createUser: CreateUser;
  updateUser: CreateUser;
};

export type MutationAuthUserArgs = {
  data: AuthUserInput;
};

export type MutationCreateChildArgs = {
  data: CreateChildInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  data: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getUserByID: CreateUser;
  me: CreateUser;
  testeChild: Scalars['String'];
  testeUser: Scalars['String'];
};

export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  birthday: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  gender: GenderEnum;
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthUserMutationMutationVariables = Exact<{
  data: AuthUserInput;
}>;

export type AuthUserMutationMutation = {
  __typename?: 'Mutation';
  authUser: {
    __typename?: 'CreateUser';
    token: string;
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      gender: GenderEnum;
      birthday: any;
      phone: string;
      createdAt: any;
      updatedAt: any;
    };
  };
};

export type CreateUserMutationMutationVariables = Exact<{
  data: CreateUserInput;
}>;

export type CreateUserMutationMutation = {
  __typename?: 'Mutation';
  createUser: {
    __typename?: 'CreateUser';
    token: string;
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      birthday: any;
      gender: GenderEnum;
      phone: string;
    };
  };
};

export type MeQueryQueryVariables = Exact<{ [key: string]: never }>;

export type MeQueryQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'CreateUser';
    token: string;
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      birthday: any;
      gender: GenderEnum;
      phone: string;
      createdAt: any;
      updatedAt: any;
    };
  };
};

export type TesteQueryQueryVariables = Exact<{ [key: string]: never }>;

export type TesteQueryQuery = { __typename?: 'Query'; testeUser: string };

export const AuthUserMutationDocument = gql`
  mutation authUserMutation($data: AuthUserInput!) {
    authUser(data: $data) {
      token
      user {
        id
        name
        email
        gender
        birthday
        phone
        createdAt
        updatedAt
      }
    }
  }
`;
export const CreateUserMutationDocument = gql`
  mutation createUserMutation($data: CreateUserInput!) {
    createUser(data: $data) {
      user {
        id
        name
        email
        birthday
        gender
        phone
      }
      token
    }
  }
`;
export const MeQueryDocument = gql`
  query meQuery {
    me {
      token
      user {
        id
        name
        email
        birthday
        gender
        phone
        createdAt
        updatedAt
      }
    }
  }
`;
export const TesteQueryDocument = gql`
  query testeQuery {
    testeUser
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    authUserMutation(
      variables: AuthUserMutationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AuthUserMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AuthUserMutationMutation>(AuthUserMutationDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'authUserMutation',
        'mutation'
      );
    },
    createUserMutation(
      variables: CreateUserMutationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateUserMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUserMutationMutation>(CreateUserMutationDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createUserMutation',
        'mutation'
      );
    },
    meQuery(
      variables?: MeQueryQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<MeQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MeQueryQuery>(MeQueryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'meQuery',
        'query'
      );
    },
    testeQuery(
      variables?: TesteQueryQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<TesteQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TesteQueryQuery>(TesteQueryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'testeQuery',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
