import styled, { css } from 'styled-components';

import { ButtonVariantEnum, type ButtonAttributes } from './Button.interface';

const DefaultButton = styled.button<ButtonAttributes>`
  ${({ theme, fontWeight = '700', fullWidth }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
    border-radius: 6px;
    border: 0;
    outline: 0;
    max-height: 2.5rem;
    height: 100%;

    font-size: 1rem;
    font-weight: ${fontWeight};
    font-family: ${theme.fonts.secondary};
    transition: all 0.2s ease-in-out;

    &:disabled {
      cursor: not-allowed !important;
      opacity: 0.8;
    }

    .buttonLoader {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 60%;
        height: 60%;
      }
    }

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `}
`;

const PrimaryButton = styled(DefaultButton)`
  ${({ theme }) => css`
    color: ${theme.colors.main};
    background: ${theme.colors.background};

    &:not(:disabled):hover,
    &:not(:disabled):active {
      background: ${theme.colors.highlight};
      color: ${theme.colors.main};
    }

    &:not(:disabled):focus {
      box-shadow: inset 0 0 0 2px ${theme.colors.secondary};
    }
  `}
`;

const SecondaryButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.main};
  background: ${({ theme }) => theme.colors.secondary};
`;

const TertiaryButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.tertiary};
`;

const UnstyledButton = styled.button`
  border: unset;
  background: unset;
  color: unset;
  transition: all 0.2s ease-in-out;
`;

export const Buttons: Record<ButtonVariantEnum, typeof DefaultButton> = {
  [ButtonVariantEnum.PRIMARY]: PrimaryButton,
  [ButtonVariantEnum.SECONDARY]: SecondaryButton,
  [ButtonVariantEnum.TERTIARY]: TertiaryButton,
  [ButtonVariantEnum.UNSTYLED]: UnstyledButton,
};
