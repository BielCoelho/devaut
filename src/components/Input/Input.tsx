import React, { forwardRef, type ForwardRefRenderFunction } from 'react';

import { getInputVariants } from './helpers';
import type { IInputProps } from './Input.interfaces';
import { InputVariant } from './Input.interfaces';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { variant = InputVariant.PRIMARY, ...rest },
  ref
) => {
  return <input className={getInputVariants(variant)} {...rest} ref={ref} />;
};

InputBase.displayName = 'InputComponent';

export const Input = forwardRef(InputBase);
