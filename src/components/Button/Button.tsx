import React from 'react';

import { ButtonVariant, type IButtonProps } from './Button.interfaces';
import { getButtonVariants } from './helpers';

export const Button = ({ children, variant = ButtonVariant.PRIMARY, ...rest }: IButtonProps) => {
  return (
    <button className={getButtonVariants(variant)} {...rest}>
      {children}
    </button>
  );
};

Button.displayName = 'ButtonComponent';
