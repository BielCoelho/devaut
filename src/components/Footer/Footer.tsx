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
        <div>
          Copyright © 2023
          <span className="space">
            <Logo size={0.5} />
          </span>
          Todos direitos reservados
        </div>
        <div>
          Feito com <Heart className="space" color={theme.colors.red} size={16} /> por&nbsp;
          <a target="_blank" rel="noreferrer" href={'https://github.com/ThisneyLandia/'}>
            ThisneyLandia
          </a>
          <div>
            <Image
              className="space"
              src="https://github.com/ThisneyLandia.png"
              alt="ThisneyLandia Logo"
            />
          </div>
        </div>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};
