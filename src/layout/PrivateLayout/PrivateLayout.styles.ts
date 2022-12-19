import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
    margin: 0 auto;
    max-width: ${theme.sizes.pageWidth};
    width: 100%;
    min-height: calc(100vh - ${theme.sizes.navbarHeight});
  `}
`;
