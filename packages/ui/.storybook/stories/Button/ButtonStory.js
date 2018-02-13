import React, { Component } from 'react';
import styled from 'styled-components';

import { StoryContainer } from '../shared-style';
import Button from '../../../packages/kit/Button';


const ButtonWrapper = styled.section`
  align-items: center;
  border-radius: 0.25rem;
  display: flex;
  padding: 0.5rem;

  > button:not(:last-child) {
    margin-right: 1rem;
  }
`;

const InvertWrapper = ButtonWrapper.extend`
  background: #333;
`;

export default class ButtonStory extends Component {
  render() {
    const { children, ...options } = this.props;
    return (
      <StoryContainer>
        <ButtonWrapper>
          <Button {...options}>{children}</Button>
        </ButtonWrapper>
        <h3>Color</h3>
        <ButtonWrapper>
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
        </ButtonWrapper>
        <h3>Invert</h3>
        <InvertWrapper>
          <Button invert>Default</Button>
          <Button color="primary" invert>Primary</Button>
          <Button color="secondary" invert>Secondary</Button>
        </InvertWrapper>
        <h3>Size</h3>
        <ButtonWrapper>
          <Button size="xs">Xsmall</Button>
          <Button size="sm">Small</Button>
          <Button>Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Xlarge</Button>
        </ButtonWrapper>
        <h3>Disabled</h3>
        <ButtonWrapper>
          <Button disabled>Disabled</Button>
          <Button color="primary" disabled>Primary</Button>
          <Button color="secondary" disabled>Secondary</Button>
          <Button invert disabled>Default</Button>
          <Button color="primary" invert disabled>Primary</Button>
          <Button color="secondary" invert disabled>Secondary</Button>
        </ButtonWrapper>
      </StoryContainer>
    );
  }
}
