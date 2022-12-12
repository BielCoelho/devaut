import { type setCookie, type parseCookies, type destroyCookie } from 'nookies';

declare global {
  type ParseCookiesContext = Parameters<typeof parseCookies>[0];
  type SetCookieContext = Parameters<typeof setCookie>[0];
  type DestroyCookieContext = Parameters<typeof destroyCookie>[0];
}
