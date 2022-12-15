import React, { forwardRef, type ForwardRefRenderFunction as FFR } from 'react';

import { ButtonVariantEnum, type IButtonProps } from './Button.interface';
import { Buttons, Loading } from './Button.styles';

const ButtonComponent: FFR<HTMLButtonElement, IButtonProps> = (
  {
    children,
    variant = ButtonVariantEnum.PRIMARY,
    isLoading = false,
    fontWeight = '700',
    fullWidth,
    ...rest
  },
  ref
) => {
  const ButtonComponent = Buttons[variant];
  return (
    <ButtonComponent
      {...rest}
      isLoading={isLoading}
      disabled={isLoading || rest?.disabled}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
      ref={ref}
    >
      {isLoading ? <Loading /> : children}
    </ButtonComponent>
  );
};

export const Button = forwardRef(ButtonComponent);
ButtonComponent.displayName = 'ButtonComponent';
