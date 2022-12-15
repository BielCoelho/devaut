import {
  type GetServerSidePropsContext,
  type GetServerSideProps,
  type GetServerSidePropsTyped,
} from 'next';

import { dehydrate } from '@tanstack/react-query';

import { queryClient } from 'services/api';
import { REACT_QUERY_KEYS } from 'constants/react-query';
import { getMeService } from 'services/users/users.service';
import { getActiveToken, removeAuthToken } from 'services/auth';

import { type DefaultSSRAuthProps, type WithSSRAuthProps } from './withSSRAuth.interfaces';

const removeAuthAndRedirect = (ctx: GetServerSidePropsContext) => {
  removeAuthToken(ctx);
  if (ctx.resolvedUrl !== '/') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export function withSSRAuth<P extends DefaultSSRAuthProps = WithSSRAuthProps>(
  fn?: GetServerSidePropsTyped<P>
): GetServerSideProps<P> {
  return async (ctx) => {
    try {
      const token = getActiveToken(ctx);
      if (!token) removeAuthAndRedirect(ctx);

      if (token) {
        await queryClient.prefetchQuery({
          queryKey: [REACT_QUERY_KEYS.ME],
          queryFn: () => getMeService(ctx),
          staleTime: 1000 * 60 * 5, // 5 minutes,
          retry: false,
        });
      }

      const SSRProps = {
        dehydratedState: dehydrate(queryClient),
      };

      if (fn) return await fn(ctx, SSRProps);

      return {
        props: SSRProps,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any; // TO-DO - Try to fix this any
    } catch (err) {
      removeAuthAndRedirect(ctx);
    }
  };
}
