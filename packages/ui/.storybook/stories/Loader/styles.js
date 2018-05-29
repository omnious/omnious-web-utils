// Global import
import styled from 'styled-components';

// Local import
import { COLORS } from '../../../src';

export const Collection = styled.section`
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

export const InvertCollection = Collection.extend`
  background-color: ${COLORS.darkenGray};

  & > h1 {
    color: ${COLORS.white};
  }
`;
