import { type ReactNode } from 'react';

import { type MeQueryQuery, type AuthUserInput, type User } from 'graphql/generated/graphql';

export interface IAuthProviderProps {
  children: ReactNode;
  initialUser?: MeQueryQuery['me'];
}

export interface IAuthContextData {
  isAuthenticated: boolean;
  user?: User;
  handleLogin: (user: AuthUserInput) => void;
  handleLogout: () => void;
  updateSession: (data: MeQueryQuery['me']) => void;
}
