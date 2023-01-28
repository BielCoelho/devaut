import { type ReactNode } from 'react';

export interface IDropdownProps {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  itemMap: JSX.Element[];
}
