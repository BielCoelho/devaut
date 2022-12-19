import React, { useEffect } from 'react';
import router from 'next/router';

import { useAuth } from 'contexts/Auth';
import { PrivateLayout } from 'layout/PrivateLayout';
import { LoginContent } from 'contents/Login';

export function withAuth<T>(Component: React.ComponentType<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: T extends object ? T : any) => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
      if (router.pathname !== '/' && !isAuthenticated) router.push('/');
    }, [isAuthenticated]);

    if (isAuthenticated) {
      return (
        <PrivateLayout>
          <Component {...props} />
        </PrivateLayout>
      );
    }

    return <LoginContent />;
  };
}
