import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from 'contexts/Auth';

export function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const { isAuthenticated, isLoadingAuth } = useAuth();
    const { push } = useRouter();

    useEffect(() => {
      if (!isAuthenticated) push('/');
    }, [isAuthenticated]);

    if (isLoadingAuth) return <div>Loading</div>;
    // @ts-ignore
    if (isAuthenticated) return <Component {...props} />;
  };
}

withAuth.displayName = 'withAuthComponent';
