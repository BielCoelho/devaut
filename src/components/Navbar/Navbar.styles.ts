import styled, { css } from 'styled-components';

export const NavWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.background_light};
    height: 6.25rem;
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

    div:first-child {
      justify-self: left;
      align-self: center;
    }

    div:last-child {
      align-self: center;
      justify-self: right;
    }
  `}
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 1rem;

  div {
    width: 6rem;
  }
`;

export const NavLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  span {
    font-size: 0.875rem;
  }
`;
