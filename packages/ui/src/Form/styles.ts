// Global import
import styled from 'styled-components';

export const StyledForm: any = styled.div``;

export const FormTitle: any = styled.h4`
  margin-bottom: 0.5rem;
`;

export const FormItemWrapper: any = styled.form`
  display: flex;

  ${({ isVertical }: any): string =>
    isVertical ? 'flex-direction: column;' : 'flex-direction: row'};
`;
