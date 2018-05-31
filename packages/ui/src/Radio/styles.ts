// Global import
import styled from 'styled-components';

export const StyledRadio: any = styled.label`
  align-items: center;
  display: flex;
  position: relative;

  & > input {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
  }
`;

export const RadioDot: any = styled.span`
  border: 1px solid #8c9ba5;
  border-radius: 50%;
  height: 1.2rem;
  margin: 0.5rem;
  width: 1.2rem;
`;
