import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';

import styled, { css } from 'styled-components';

export const DropdownArrow = styled(DropdownPrimitive.Arrow)``;

export const DropdownItem = styled(DropdownPrimitive.Item)``;

export const DropdownContent = styled(DropdownPrimitive.Content)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.background_light};
    border: 2px solid ${theme.colors.highlight};
    box-shadow: ${theme.shadows.insideCard};
    border-radius: 8px;
    padding: 0.25rem;
    cursor: pointer;

    & ${DropdownArrow} {
      fill: ${theme.colors.highlight};
    }

    & ${DropdownItem} {
      background: ${theme.colors.background_light};
      padding: 0.5rem;
      transition: all 0.2s;
      border-radius: 8px;
      outline: none;

      &:hover {
        background: ${theme.colors.background};
      }
    }
  `}
`;
