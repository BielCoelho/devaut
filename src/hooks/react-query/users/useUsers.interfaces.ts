import { type MeQueryQuery } from 'graphql/generated/graphql';

export interface IUseMeQueryProps {
  initialState?: MeQueryQuery['me'];
}
