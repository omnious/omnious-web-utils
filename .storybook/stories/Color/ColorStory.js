import * as React from 'react';
import styled from 'styled-components';

import { StoryContainer } from '../shared-style';

export default class ColorStory extends React.Component {
  render() {
    return (
      <StoryContainer>
        <h1>Shadows</h1>
        <h1>Gradients</h1>
      </StoryContainer>
    );
  }
}
