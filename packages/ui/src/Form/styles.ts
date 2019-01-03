// Global import
import styled from 'styled-components';

// Local import
import { FormComponent } from './Form';
import { Props } from './types';

export const Form = styled(FormComponent)``;

export const Title = styled.h4`
  margin-bottom: 0.5rem;
`;

export const FieldWrapper = styled.form`
  display: flex;
  width: ${({ width }): string => width || '100%'};

  ${({ vertical }: Props): string =>
    vertical
      ? `
      flex-direction: column;

      & > *:not(:first-child) {
        margin-top: 2rem;
      }
    `
      : `
    align-items: flex-end;
    flex-direction: row;

    & > *:not(:first-child) {
      margin-left: 2rem;
    }
  `};
`;
