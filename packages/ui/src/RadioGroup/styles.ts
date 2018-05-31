// Global import
import styled from 'styled-components';

export const StyledRadioGroup: any = styled.div``;

export const GroupWrapper: any = styled.div`
  display: flex;

  ${({ isVertical }: any): string =>
    isVertical
      ? `
    flex-direction: column;
  `
      : ''};
`;
