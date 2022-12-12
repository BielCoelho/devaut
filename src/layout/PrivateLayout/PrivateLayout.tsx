import React from 'react';

import { Sidebar } from 'components/Sidebar';
import { Navbar } from 'components/Navbar';

import { type IPrivateLayoutProps } from './PrivateLayout.interfaces';

export const PrivateLayout = ({ children }: IPrivateLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};
