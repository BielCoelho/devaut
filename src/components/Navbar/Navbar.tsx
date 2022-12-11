import React from 'react';
import { Search } from 'react-feather';

import { Button, ButtonVariant } from 'components/Button';
import { Input } from 'components/Input';

export const Navbar = () => {
  return (
    <div className="mb-2 flex h-14 items-center justify-between gap-4 border-b border-orange-900 bg-white px-4">
      <div className="flex w-6/12 items-center gap-4">
        <Search />
        <Input placeholder="Buscar por" />
      </div>
      <div className="flex w-fit max-w-full flex-1 gap-2">
        <Button variant={ButtonVariant.SECONDARY}>Registrar Nova Criança</Button>
        <Button variant={ButtonVariant.PRIMARY}>Registrar Nova Criança</Button>
      </div>
    </div>
  );
};
