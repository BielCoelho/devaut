import { type setCookie, type parseCookies, type destroyCookie } from 'nookies';

declare module 'nookies' {
  export type ParseCookiesContext = Parameters<typeof parseCookies>[0];
  export type SetCookieContext = Parameters<typeof setCookie>[0];
  export type DestroyCookieContext = Parameters<typeof destroyCookie>[0];
}
