import styled, { css } from 'styled-components';

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.background_light};
    height: 2.5rem;
    width: 100%; ;
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

    .space {
      display: inline-block;
      margin: 0 0.25rem;
    }

    img {
      width: 1.5rem;
      height: 100%;
    }

    > div {
      display: flex;
      align-items: center;
    }

    a {
      transition: all 0.2s;
    }

    a:hover {
      color: ${theme.colors.highlight};
    }
  `}
`;
