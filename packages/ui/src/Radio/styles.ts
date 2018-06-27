// Global import
import styled from 'styled-components';

// Local import
import { Dot } from '../Icons';

export const StyledRadio: any = styled.div`
  ${({ disabled }: any): any =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `};
`;

export const RadioTitle: any = styled.h4`
  margin-bottom: 0.5rem;
`;

export const RadioItemWrapper: any = styled.form`
  display: flex;
  ${({ isVertical }: any): string =>
    isVertical ? 'flex-direction: column;' : 'flex-direction: row'};
`;

export const StyledRadioItem: any = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 0.5rem 0;
  position: relative;
  ${({ disabled }: any): any =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `};
`;

export const RadioDot: any = styled(Dot)`
  margin-right: 0.5rem;
`;

export const RadioInput: any = styled.input.attrs({ type: 'radio' })`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
`;
