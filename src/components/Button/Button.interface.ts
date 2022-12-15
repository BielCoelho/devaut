import type { ButtonHTMLAttributes } from 'react';

export enum ButtonVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  UNSTYLED = 'unstyled',
}

type FontWeightType = '700' | '600' | '500' | '400';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariantEnum;
  isLoading?: boolean;
  fontWeight?: FontWeightType;
  fullWidth?: boolean;
}

export type ButtonAttributes = {
  isLoading?: boolean;
  fontWeight?: FontWeightType;
  fullWidth?: boolean;
};
