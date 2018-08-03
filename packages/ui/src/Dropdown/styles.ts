// Global import
import Select from 'react-select';
import styled from 'styled-components';

// Local import
import { DropdownProps } from './Dropdown';
import { radius } from '../sizes';

export const StyledDropdown: any = styled.label`
  ${({ disabled }: DropdownProps): string =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `
      : ''};

  & .title {
    margin-bottom: 0.5rem;
  }

  & .dropdown {
    width: ${({ width }: any): string => width || '20rem'};

    /* &.is-open > .Select-control {
      background-color: #f3fafd;
      border-color: transparent;
    }

    & .Select-control {
      background-color: #fafdfd;
      border: 1px solid #bccbd2;
      border-radius: ${radius.xs};
      height: 3rem;
      cursor: pointer;
    }

    & .Select-value {
      line-height: 3rem;

      &-label {
        line-height: 3rem;
      }
    }

    & .Select-placeholder {
      line-height: 3rem;
    }

    & .Select-input {
      height: 2.8rem;

      & > input {
        line-height: 25px;
      }
    }

    & .Select-menu-outer {
      border: 1px solid transparent;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }

    & .Select-option {
      &.is-selected,
      &.is-focused {
        background-color: #f3fafd;
      }

      &.is-disabled {
        cursor: not-allowed;
      }
    } */
  }
`;
