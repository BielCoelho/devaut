import React from 'react';
import { Heart } from 'react-feather';
import Image from 'next/image';

import { Logo } from 'components/Logo';
import { theme } from 'styles/theme';

import * as S from './Footer.styles';

export const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.LeftContainer>
          Copyright © 2023&nbsp;
          <Logo size={0.5} />
          &nbsp;Todos direitos reservados
        </S.LeftContainer>

        <S.RightContainer>
          Feito com&nbsp;
          <Heart color={theme.colors.red} size={16} />
          &nbsp;por
          <a target="_blank" rel="noreferrer" href="https://github.com/ThisneyLandia/">
            &nbsp;ThisneyLandia&nbsp;
          </a>
          <Image
            src="https://github.com/ThisneyLandia.png"
            alt="ThisneyLandia Logo"
            width={32}
            height={32}
          />
        </S.RightContainer>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};
