import { graphql } from '../generated';

export const createUserMutation = graphql(`
  mutation createUser($data: CreateUserInput!) {
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
`);

export const authUserMutation = graphql(`
  mutation authUser($data: AuthUserInput!) {
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
`);

export const meQuery = graphql(`
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
`);
