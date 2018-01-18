import * as React from 'react';
import styled from 'styled-components';


const ButtonContainer = styled.button`
  // background-color: transparent;
`;

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  dark?: boolean;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button className={this.props.className} disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}

const StyledButton = styled(Button)`
  border: 0;
`;

export default StyledButton;
