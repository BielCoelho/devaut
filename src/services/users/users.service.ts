import { envs } from 'constants/envs';
import { parseCookies, type ParseCookiesContext } from 'nookies';
import { getSSRSdk } from 'services/api';

export const getMeService = async (ctx?: ParseCookiesContext) => {
  const cookies = parseCookies(ctx);
  const token = cookies[envs.AUTH_COOKIE];

  try {
    if (!token) throw new Error('No token found');
    const response = await getSSRSdk(ctx).meQuery();
    return response.me;
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};
