import styled, { css } from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-transform: uppercase;
`;

export const LogoText = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.main};
  `}
`;

export const LogoHighlight = styled.span`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.highlight};
  `}
`;
