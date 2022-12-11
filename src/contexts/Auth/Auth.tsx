import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { type User, type AuthUserInput, type MeQueryQuery } from 'graphql/generated/graphql';

import { useLoginMutation } from 'hooks/react-query';
import nookies from 'nookies';
import { envs } from 'constants/envs';
import { getToken, removeAuth, setAuth } from 'services/auth/auth.service';
import { userService } from 'services/user/user.service';

import { type IAuthContextData, type IAuthProviderProps } from './Auth.interfaces';

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<User>();
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  const { mutateAsync: authUserService } = useLoginMutation();
  const { push } = useRouter();

  const handleLogin = useCallback(async (data: AuthUserInput) => {
    try {
      const { authUser } = await authUserService(data);
      setUser(authUser?.user);
      nookies.set(undefined, envs.AUTH_COOKIE, authUser.token, {
        maxAge: 15 * 24 * 60 * 60, //15dias
        path: '/',
      });
      push('/dashboard');
    } catch {
      throw new Error('mostrar falha ao autenticar usuario');
    }
  }, []);

  function logout() {
    setUser(undefined);
    removeAuth();
  }

  function updateSession(data: MeQueryQuery['me']) {
    setAuth(data.token);
    setUser(data.user);
  }

  useEffect(() => {
    if (!!getToken()) {
      setIsLoadingAuth(true);
      userService
        .getMe()
        .then(({ me }) => {
          setAuth(me.token);
          setUser(me.user);
        })
        .finally(() => setIsLoadingAuth(false));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, handleLogin, logout, isLoadingAuth, updateSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
