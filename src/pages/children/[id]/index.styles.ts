import styled, { css } from 'styled-components';

export const ChildContainer = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ChildHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;

  a:hover {
    text-decoration: underline;
  }
`;

export const ChildContent = styled.main`
  ${({ theme }) => css`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 8px;
      width: 100%;
      padding: 1rem;

      > div {
        background-color: ${theme.colors.background_light};
        border: 1px solid ${theme.colors.background};
        border-radius: 8px;
        padding: 1rem;
        box-shadow: ${theme.shadows.insideCard};
      }
    }
  `}
`;

export const ChildInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChildAnnotations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ChildFamily = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ChildStaff = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
