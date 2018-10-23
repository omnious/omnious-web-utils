// Global import
import styled from 'styled-components';

// Local import
import { Props } from './types';

export const StyledForm: any = styled.div``;

export const Title: any = styled.h4`
  margin-bottom: 0.5rem;
`;

export const FieldWrapper: any = styled.form`
  display: flex;
  width: ${({ width }: any): string => width || '20rem'};

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
