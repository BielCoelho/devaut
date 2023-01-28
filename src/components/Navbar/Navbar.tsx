import React from 'react';
import { Sun, Activity, Users } from 'react-feather';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Avatar } from 'components/Avatar';
import { Logo } from 'components/Logo';
import { useAuth } from 'contexts/Auth';
import { Dropdown } from 'components/Dropdown';

import * as S from './Navbar.styles';

export const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const { asPath } = useRouter();

  const dropdownOptions = [
    <Link key={1} href={'/profile'}>
      Meu perfil
    </Link>,
    <Link key={2} href={'/preferences'}>
      Preferencias
    </Link>,
    <span onClick={handleLogout} key={3}>
      Sair
    </span>,
  ];

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
        <Dropdown itemMap={dropdownOptions}>
          <Avatar name={user?.name} round />
        </Dropdown>
      </S.NavContainer>
    </S.NavWrapper>
  );
};
