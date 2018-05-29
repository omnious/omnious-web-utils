// Global import
import styled from 'styled-components';

// Local import
import { RadioComponent } from '.';

export const Radio: any = styled(RadioComponent)`
  align-items: center;
  display: flex;
  margin: 0.5rem 0;

  & > span {
    margin-left: 0.5rem;
  }

  & > input {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
  }
`;
