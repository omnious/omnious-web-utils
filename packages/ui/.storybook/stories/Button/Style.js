// Global import
import styled from 'styled-components';

// Local import
import { COLORS } from '../../../src';

export const ButtonCollection = styled.section`
  align-items: center;
  border-radius: 0.25rem;
  display: flex;
  margin-bottom: 1rem;
  padding: 0.5rem;

  & > h1 {
    width: 10rem;
  }

  & > button {
    margin-right: 1rem;
  }
`;

export const InvertCollection = ButtonCollection.extend`
  background-color: ${COLORS.primaryBlack};

  & > h1 {
    color: ${COLORS.white};
  }
`;
