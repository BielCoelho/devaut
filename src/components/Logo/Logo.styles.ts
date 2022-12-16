import styled, { css } from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.logo};
  text-transform: uppercase;
  cursor: default;
  user-select: none;
`;

export const LogoText = styled.h1`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 2.5rem;
    color: ${theme.colors.main};
  `}
`;

export const LogoHighlight = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.highlight};
  `}
`;
