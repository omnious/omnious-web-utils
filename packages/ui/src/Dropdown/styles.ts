// Global import
import Select from 'react-select';
import styled from 'styled-components';

export const StyledDropdown: any = styled.div``;

export const StyledSelect: any = styled(Select)`
  margin: 0.5rem 1rem 1rem 0;
  width: ${({ width }: any): string => width || '12rem'};
`;
