import React from 'react';

export function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const isAuth = true;
    // @ts-ignore
    if (isAuth) return <Component {...props} />;
    return <div>Not authorized</div>;
  };
}

withAuth.displayName = 'withAuthComponent';
