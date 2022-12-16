import React from 'react';

import { Navbar } from 'components/Navbar';

import * as S from './PrivateLayout.styles';
import { type IPrivateLayoutProps } from './PrivateLayout.interfaces';

export const PrivateLayout = ({ children }: IPrivateLayoutProps) => {
  return (
    <S.Wrapper>
      <Navbar />
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.Wrapper>
  );
};
