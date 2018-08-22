// Global import
import styled from 'styled-components';

// Local import

const Ul: any = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline;
`;

export const VerticalUl: any = styled(Ul)`
  & > li {
    float: none;
  };
`;

export const HorizontalUl: any = styled(Ul)`
  & > li {
    display: inline;
  };
`;