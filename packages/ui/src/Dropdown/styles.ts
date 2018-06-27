// Global import
import Select from 'react-select';
import styled from 'styled-components';

// Local import
import { SIZES } from '../constants';

export const StyledLabel: any = styled.label`
  ${({ disabled }: any): any =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `};
`;

export const DropdownTitle: any = styled.h4`
  margin-bottom: 0.5rem;
`;

export const DropdownWrapper: any = styled(Select)`
  width: ${({ width }: any): string => width || '20rem'};

  &.is-open > .Select-control {
    background-color: #f3fafd;
    border-color: transparent;
  }

  & .Select-control {
    background-color: #fafdfd;
    border: 1px solid #bccbd2;
    border-radius: ${SIZES.xsRad};
    cursor: pointer;
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
  }
`;
