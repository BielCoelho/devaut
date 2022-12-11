import { type GetServerSidePropsContext } from 'next';

import { envs } from 'constants/envs';
import { parseCookies, setCookie } from 'nookies';

export const setAuth = (token: string, ctx?: GetServerSidePropsContext) => {
  setCookie(ctx, envs.AUTH_COOKIE, token, {
    maxAge: 15 * 24 * 60 * 60, //15dias
    path: '/',
  });
};

export const removeAuth = (ctx?: GetServerSidePropsContext) => {
  setCookie(ctx, envs.AUTH_COOKIE, '', {
    maxAge: 0,
    path: '/',
  });
};

export const getToken = (ctx?: GetServerSidePropsContext) => {
  const cookies = parseCookies(ctx);
  return cookies[envs.AUTH_COOKIE];
};