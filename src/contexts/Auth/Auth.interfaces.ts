import { type ReactNode } from 'react';

import { type AuthUserInput, type User } from 'graphql/generated/graphql';

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContextData {
  isAuthenticated: boolean;
  user?: User;
  handleAuth: (data: AuthUserInput) => Promise<void>;
  handleLogout: () => void;
}
