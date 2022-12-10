/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthUserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type CreateUser = {
  __typename?: "CreateUser";
  token: Scalars["String"];
  user: User;
};

export type CreateUserInput = {
  birthday: Scalars["DateTime"];
  confirmPassword: Scalars["String"];
  email: Scalars["String"];
  gender: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  authUser: CreateUser;
  createUser: CreateUser;
  helloMutation: Scalars["String"];
};

export type MutationAuthUserArgs = {
  data: AuthUserInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"];
};

export type User = {
  __typename?: "User";
  birthday: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  gender: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  phone: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: {
    __typename?: "CreateUser";
    token: string;
    user: {
      __typename?: "User";
      id: string;
      name: string;
      email: string;
      birthday: any;
      gender: string;
      phone: string;
    };
  };
};

export type AuthUserMutationVariables = Exact<{
  data: AuthUserInput;
}>;

export type AuthUserMutation = {
  __typename?: "Mutation";
  authUser: {
    __typename?: "CreateUser";
    token: string;
    user: { __typename?: "User"; id: string; name: string };
  };
};

export const CreateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "birthday" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gender" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "phone" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "token" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const AuthUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "authUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AuthUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "authUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AuthUserMutation, AuthUserMutationVariables>;
