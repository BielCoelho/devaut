import styled, { css } from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TodoItems = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    color: ${theme.colors.paragraph};

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1rem;
      background: ${theme.colors.background_light};
      border-radius: 8px;
      margin-bottom: 0.5rem;
    }

    button {
      border-style: none;
      background: none;
      color: ${theme.colors.main};

      transition: all 0.2s;

      &:hover {
        color: ${theme.colors.red};
      }
    }
  `}
`;

export const InputTodo = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    div {
      cursor: pointer;
    }

    svg {
      color: ${theme.colors.main};

      transition: all 0.2s;
      &:hover {
        color: ${theme.colors.highlight};
      }
    }
  `}
`;
