import styled, { css } from 'styled-components';

interface ILogoContainerProps {
  size: number;
}

export const LogoContainer = styled.div<ILogoContainerProps>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${size + 'rem'};
    font-family: ${theme.fonts.logo};
    text-transform: uppercase;
    user-select: none;

    h1 {
      font-weight: 400;
      font-size: ${size + 0.5 + 'rem'};
      color: ${theme.colors.main};
    }

    span {
      color: ${theme.colors.highlight};
    }
  `}
`;
