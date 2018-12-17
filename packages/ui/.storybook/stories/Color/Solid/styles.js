// Global import
import styled from 'styled-components';

// Local import
import { COLORS } from '../../../../src';

export const ColorCollection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;

  & > h1 {
    width: 10rem;
  }
`;

export const Card = styled.div`
  padding: 0.5rem;
  text-align: center;
`;

export const Viewer = styled.div`
  background-color: ${({ color }) => color};
  border: 0.8px solid #bacad5;
  border-radius: 3px 3px 0 0;
  height: 9rem;
  width: 9rem;
`;

export const Desc = styled.div`
  border: 0.8px solid #979797;
  border-top: 0;
  border-radius: 0 0 3px 3px;
  padding: 0.5rem;
`;
