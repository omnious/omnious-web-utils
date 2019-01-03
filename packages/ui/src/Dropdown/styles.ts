// Global import
import Select from 'react-select';
import styled from 'styled-components';

// Local import
import { Props } from './types';

export const StyledLabel: any = styled.label`
  ${({ disabled }: Props): string =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `
      : ''};
  }
`;

export const Title = styled.h4`
  margin-bottom: 0.5rem;
`;

export const StyledDropdown = styled(Select)`
  .select__control {
    background-color: #ececea;
    border: 1px solid #c8c9c7;
    border-radius: 0;
    height: 40px;
    width: ${({ width }): string => width || '20rem'};

    &:focus {
      border-color: #888b8d;
      box-shadow: 0 0 0 1px #888b8d;
    }

    &:hover {
      background-color: #d0d0ce;
      border-color: #c8c9c7;
      box-shadow: none;
    }
  }

  .select__menu {
    border: 1px solid #c8c9c7;
    border-radius: 0;
    margin: 0;

    &-list {
      padding: 0;
    }
  }

  .select__option {
    align-items: center;
    display: flex;
    min-height: 40px;

    &:not(:last-child) {
      border-bottom: 1px solid #c8c9c7;
    }
  }

  .select__single-value {
    color: #1d252d;
  }

  .select__indicator-separator {
    opacity: 0;
  }
`;
