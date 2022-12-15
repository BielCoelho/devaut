import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const LoginFormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    border-radius: 12px;

    background-color: ${theme.colors.background_light};
    color: ${theme.colors.main};
  `}
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.headline};
    margin-top: 1rem;
  }
`;
