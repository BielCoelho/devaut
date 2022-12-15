import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { type User, type AuthUserInput } from 'graphql/generated';

import { useAuthMutation } from 'hooks/useAuthMutation';
import { removeAuthToken, setAuthToken } from 'services/auth';
import { useMe } from 'hooks/useMe';

import { type IAuthContextData, type IAuthProviderProps } from './Auth.interfaces';

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const { data } = useMe();
  const [user, setUser] = useState<User | undefined>(data?.user);
  const { mutateAsync: authMutation } = useAuthMutation();

  const handleAuth = useCallback(async (data: AuthUserInput) => {
    const { authUser } = await authMutation({ data });
    setUser(authUser.user);
    setAuthToken(authUser.token);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(undefined);
    removeAuthToken();
  }, []);

  useEffect(() => {
    setUser(data?.user);
  }, [data]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, handleAuth, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return context;
};
