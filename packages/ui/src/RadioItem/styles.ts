// Global import
import styled from 'styled-components';

// Local import
import { Dot } from '..';

export const StyledRadioItem: any = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 0.5rem 0;
  position: relative;
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
