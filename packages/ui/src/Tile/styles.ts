// Global import
import styled from 'styled-components';

// Local import
import { gray, shadow, white } from '../colors';
import { radius, space } from '../sizes';

export const StyledTile: any = styled.section`
  background-color: ${white.primary};
  border: 1px solid ${gray.secondary};
  border-radius: ${radius.xs};
  box-shadow: ${shadow.tile};
  padding: ${space.lg};
  text-align: left;
`;
