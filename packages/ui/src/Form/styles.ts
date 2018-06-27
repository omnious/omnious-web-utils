// Global import
import styled from 'styled-components';

// Local import
import { FormProps } from '.';

export const StyledForm: any = styled.div``;

export const FormTitle: any = styled.h4`
  margin-bottom: 0.5rem;
`;

export const FormFieldWrapper: any = styled.form`
  display: flex;
  ${({ isVertical }: FormProps): string =>
    isVertical
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
