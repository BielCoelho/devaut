import React from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Button, ButtonVariantEnum } from 'components/Button';

import { type IDropdownProps } from './Dropdown.interfaces';
import * as S from './Dropdown.styles';

export const Dropdown = ({ children, onOpenChange, open, itemMap }: IDropdownProps) => {
  return (
    <DropdownMenu.Root onOpenChange={onOpenChange} open={open}>
      <DropdownMenu.Trigger asChild>
        <Button variant={ButtonVariantEnum.UNSTYLED}>{children}</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <S.DropdownContent>
          {itemMap.map((item) => {
            return <S.DropdownItem key={`Dropdown_item_${item.key}`}>{item}</S.DropdownItem>;
          })}
          <S.DropdownArrow />
        </S.DropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
