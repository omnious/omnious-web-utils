// Global import
import Select from 'react-select';
import styled from 'styled-components';

// Local import
import { Props } from './types';
import { radius } from '../sizes';

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
  width: ${({ width }: any): string => width || '20rem'};
`;
