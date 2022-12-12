import React, { createContext, useCallback, useContext, useState } from 'react';

import { type User, type AuthUserInput, type MeQueryQuery } from 'graphql/generated/graphql';

import { useLoginMutation } from 'hooks/react-query';
import { setCookie } from 'nookies';
import { envs } from 'constants/envs';
import { removeAuthToken, setAuthToken } from 'services/auth';

import { type IAuthContextData, type IAuthProviderProps } from './Auth.interfaces';

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children, initialUser }: IAuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>(initialUser);

  const { mutateAsync: authUserService } = useLoginMutation();

  const handleLogin = useCallback(async (data: AuthUserInput) => {
    try {
      const { authUser } = await authUserService(data);
      setUser(authUser?.user);
      setCookie(undefined, envs.AUTH_COOKIE, authUser.token, {
        maxAge: 15 * 24 * 60 * 60, //15dias
        path: '/',
      });
    } catch {
      throw new Error('mostrar falha ao autenticar usuario');
    }
  }, []);

  const handleLogout = useCallback(() => {
    setUser(undefined);
    removeAuthToken();
  }, []);

  const updateSession = useCallback((data: MeQueryQuery['me']) => {
    setAuthToken(data.token);
    setUser(data.user);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, handleLogin, handleLogout, updateSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return context;
};
