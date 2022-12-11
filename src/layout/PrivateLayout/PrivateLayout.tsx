import React from 'react';

import { Sidebar } from 'components/Sidebar';
import { Navbar } from 'components/Navbar';
import { withAuth } from 'utils/withAuth';

import { type IPrivateLayoutProps } from './PrivateLayout.interfaces';

export const PrivateLayout = withAuth(({ children }: IPrivateLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
});
