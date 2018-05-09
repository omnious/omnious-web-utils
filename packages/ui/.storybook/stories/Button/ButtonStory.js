import React from 'react';

// Local import
import { Button } from '../../../src';
import { StyledStory } from '../SharedStyle';
import { ButtonCollection, InvertCollection } from './Style';

// Component
export const ButtonStory = ({ children, ...options }) => (
  <StyledStory>
    <ButtonCollection>
      <h1>DIY</h1>
      <Button {...options}>{children}</Button>
    </ButtonCollection>
    <ButtonCollection>
      <h1>Color</h1>
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
    </ButtonCollection>
    <InvertCollection>
      <h1>Invert</h1>
      <Button color="primary" isInvert>Primary</Button>
      <Button color="danger" isInvert>Danger</Button>
    </InvertCollection>
    <ButtonCollection>
      <h1>Size</h1>
      <Button size="xs">Xsmall</Button>
      <Button size="sm">Small</Button>
      <Button>Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Xlarge</Button>
    </ButtonCollection>
    <ButtonCollection>
      <h1>Disabled</h1>
      <Button color="primary" disabled>Primary</Button>
      <Button color="danger" disabled>Danger</Button>
      <Button color="primary" isInvert disabled>Primary</Button>
      <Button color="danger" isInvert disabled>Danger</Button>
    </ButtonCollection>
  </StyledStory>
);
