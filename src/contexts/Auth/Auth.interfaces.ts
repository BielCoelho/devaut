import { type ReactNode } from 'react';

import { type MeQueryQuery, type AuthUserInput, type User } from 'graphql/generated/graphql';

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContextData {
  isAuthenticated: boolean;
  user?: User;
  handleLogin: (user: AuthUserInput) => void;
  logout: () => void;
  isLoadingAuth: boolean;
  updateSession: (data: MeQueryQuery['me']) => void;
}
