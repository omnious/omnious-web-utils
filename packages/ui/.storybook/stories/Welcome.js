import React, { Component } from 'react';
import styled from 'styled-components';

import Readme from '../../README.md';


class Welcome extends Component {
  render() {
    return (
      <div className={`markdown-body ${this.props.className}`}>
        <div dangerouslySetInnerHTML={{ __html: Readme }} />
      </div>
    );
  }
}

const StyledWelcome = styled(Welcome)`
  padding: 1rem 2rem;
`

export default StyledWelcome;
