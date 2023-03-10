/* eslint-disable @typescript-eslint/no-explicit-any */
import { type InputHTMLAttributes, type ReactNode } from 'react';
import type { Control, FieldError, FieldValues } from 'react-hook-form';

export type IInputProps = {
  name: string;
  label?: string;
  control?: Control<FieldValues | any>;
  error?: FieldError;
  wrapperClassName?: string;
  customInput?: ReactNode;
  withBorder?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputFieldAttributes = {
  withBorder?: boolean;
  hasError?: boolean;
  hasValue?: boolean;
};
