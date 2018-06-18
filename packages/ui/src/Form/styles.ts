// Global import
import styled from 'styled-components';

export const StyledForm: any = styled.div``;

export const ItemWrapper: any = styled.form`
  display: flex;

  ${({ isVertical }: any): string =>
    isVertical ? 'flex-direction: column;' : 'flex-direction: row'};
`;
