import { envs } from 'constants/envs';
import { parseCookies, setCookie } from 'nookies';

export const setAuthToken = (token: string, ctx?: SetCookieContext) => {
  setCookie(ctx, envs.AUTH_COOKIE, token, {
    maxAge: 15 * 24 * 60 * 60, //15dias
    path: '/',
  });
};

export const removeAuthToken = (ctx?: SetCookieContext) => {
  setCookie(ctx, envs.AUTH_COOKIE, '', {
    maxAge: 0,
    path: '/',
  });
};

export const getActiveToken = (ctx?: ParseCookiesContext) => {
  const cookies = parseCookies(ctx);
  return cookies[envs.AUTH_COOKIE];
};
