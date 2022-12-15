import styled, { css } from 'styled-components';

import { type InputFieldAttributes } from './Input.interfaces';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const InputLabel = styled.label`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.main};
    font-family: ${theme.fonts.secondary};
  `}
`;

export const InputField = styled.input<InputFieldAttributes>`
  ${({ theme, hasError, hasValue }) => css`
    max-height: 3rem;
    min-height: 2.5rem;
    border: 0;
    outline: 0;
    font-size: 1rem;
    font-family: ${theme.fonts.secondary};

    padding: 0.5rem 1rem;
    border-radius: 6px;
    background: ${theme.colors.background};
    box-shadow: 0 0 0px 1px ${theme.colors.background};
    color: ${theme.colors.main};

    text-overflow: ellipsis;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: inherit;
    }

    &:focus {
      color: ${theme.colors.highlight};
      box-shadow: 0 0 0px 2px ${theme.colors.highlight};
    }

    ${hasValue &&
    css`
      color: ${theme.colors.headline};
    `};

    ${hasError &&
    css`
      color: ${theme.colors.red} !important;
      box-shadow: 0 0 0 2px ${theme.colors.red} !important;
    `}

    &:disabled {
      opacity: 0.75;
      cursor: not-allowed;
    }
  `}
`;

export const InputError = styled.span`
  ${({ theme }) => css`
    padding-left: 0.25rem;
    font-size: 0.875rem;
    line-height: 140%;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.red};
  `}
`;
