import styled, { css } from 'styled-components';

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.background_light};
    width: 100%;
    padding: 1rem 0;
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.sizes.pageWidth};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
  `}
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.highlight};
  }

  a {
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
