import styled, { css } from 'styled-components';

interface ICardHeaderProps {
  sex: string;
}

export const ChildrenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ChildrenHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      max-width: 90%;
      span {
        font-size: 0.725rem;
        padding: 0.2rem;
        border-radius: 8px;
        background-color: ${theme.colors.highlight};
      }
    }

    .searchBox {
      width: 50%;
    }
  `}
`;

export const ChildrenContent = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${theme.sizes.card.width}, 1fr));
    gap: 1rem;
    justify-items: center;
  `}
`;

export const ChildrenCard = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: ${theme.sizes.card.width};
    padding: 1rem;
    background-color: ${theme.colors.background_light};
    border-radius: 8px;
  `}
`;

export const CardHeader = styled.div<ICardHeaderProps>`
  ${({ theme, sex }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.background};

    a {
      transition: all 0.2s;

      &:hover {
        color: ${theme.colors.highlight};
      }
    }

    .sub {
      font-size: 0.725rem;
      margin-bottom: 0.5rem;
      color: ${theme.colors.subtitle};
    }

    .ball {
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      background: ${sex === 'Masculino' ? theme.colors.blue : theme.colors.pink};
    }
  `}
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .info {
      color: ${theme.colors.paragraph};
    }
  `}
`;

export const CardFooter = styled.div`
  ${({ theme }) => css`
    margin-top: auto;
    font-size: 0.725rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;

    border-top: 1px solid ${theme.colors.background};

    .icon {
      margin-top: 8px;
      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        color: ${theme.colors.red};
      }
    }
  `}
`;
