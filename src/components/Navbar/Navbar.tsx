import React from 'react';
import { Sun, Activity, Users } from 'react-feather';

import { Avatar } from 'components/Avatar';
import { Logo } from 'components/Logo';

import * as S from './Navbar.styles';

export const Navbar = () => {
  return (
    <S.NavWrapper>
      <S.NavContainer>
        <Logo />
        <S.NavLinksWrapper>
          <S.NavLinkItem>
            <Activity size={28} />
            <span>Geral</span>
          </S.NavLinkItem>
          <S.NavLinkItem>
            <Sun size={28} />
            <span>Crianças</span>
          </S.NavLinkItem>
          <S.NavLinkItem>
            <Users size={28} />
            <span>Profissionais</span>
          </S.NavLinkItem>
        </S.NavLinksWrapper>
        <Avatar name="Kevin Pagliuca" round />
      </S.NavContainer>
    </S.NavWrapper>
  );
};
