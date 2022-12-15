/* eslint-disable @typescript-eslint/no-explicit-any */
import { type DehydratedState } from '@tanstack/react-query';

export type DefaultSSRAuthProps = { [key: string]: any };

export type DehydratedSSRAuthProps = {
  dehydratedState: DehydratedState;
};

export type WithSSRAuthProps<P = DehydratedSSRAuthProps> = DehydratedSSRAuthProps & P;
