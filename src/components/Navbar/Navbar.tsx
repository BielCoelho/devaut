import React from 'react';
import { Sun, Activity, Users } from 'react-feather';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Avatar } from 'components/Avatar';
import { Logo } from 'components/Logo';
import { useAuth } from 'contexts/Auth';

import * as S from './Navbar.styles';

export const Navbar = () => {
  const { user } = useAuth();
  const { asPath } = useRouter();

  return (
    <S.NavWrapper>
      <S.NavContainer>
        <Link href={'/'}>
          <Logo />
        </Link>
        <S.NavLinksWrapper>
          <Link href={'/stats'}>
            <S.NavLinkItem active={asPath.includes('/stats')}>
              <Activity size={28} />
              <span>Geral</span>
            </S.NavLinkItem>
          </Link>
          <Link href={'/children'}>
            <S.NavLinkItem active={asPath.includes('/children')}>
              <Sun size={28} />
              <span>Crianças</span>
            </S.NavLinkItem>
          </Link>
          <Link href={'/staff'}>
            <S.NavLinkItem active={asPath.includes('/staff')}>
              <Users size={28} />
              <span>Profissionais</span>
            </S.NavLinkItem>
          </Link>
        </S.NavLinksWrapper>
        <Link href={'/profile'}>
          <Avatar name={user?.name} round />
        </Link>
      </S.NavContainer>
    </S.NavWrapper>
  );
};
