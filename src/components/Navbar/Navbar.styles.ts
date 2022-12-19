import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { type INavLinkProps } from './Navbar.interfaces';

export const NavWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.background_light};
    height: ${theme.sizes.navbarHeight};
    width: 100%;
  `}
`;

export const NavContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 2rem;
    width: 100%;
    max-width: ${theme.sizes.pageWidth};
    margin: 0 auto;

    a:first-child {
      cursor: pointer;
      justify-self: left;
      align-self: center;
    }

    a:last-child {
      align-self: center;
      justify-self: right;
    }
  `}
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  a {
    width: 6rem;
  }
`;

export const NavLinkItem = styled.div<INavLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${({ active, theme }) => active && lighten(0.1, theme.colors.highlight)};

  transition: all 0.2s;

  span {
    font-size: 0.875rem;
  }

  &:hover {
    ${({ theme }) => css`
      color: ${theme.colors.highlight};
    `}
  }
`;
