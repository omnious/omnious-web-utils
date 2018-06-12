// Global import
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Local import
import { Button } from '../../../src';
import { StyledStory } from '../SharedStyles';
import { Collection, InvertCollection } from '.';

// Component
export const ButtonStory = ({ children, ...options }) => (
  <Router>
    <StyledStory>
      <InvertCollection>
        <h1>DIY</h1>
        <Button {...options}>{children}</Button>
      </InvertCollection>
      <Collection>
        <h1>Color</h1>
        <Button color="primary">Primary</Button>
        <Button color="danger">Danger</Button>
        <Button color="default">Default</Button>
      </Collection>
      <InvertCollection>
        <h1>Invert</h1>
        <Button color="primary" isInvert>
          Primary
        </Button>
        <Button color="danger" isInvert>
          Danger
        </Button>
        <Button color="default" isInvert>
          Default
        </Button>
      </InvertCollection>
      <Collection>
        <h1>Size</h1>
        <Button size="xs">Xsmall</Button>
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Xlarge</Button>
      </Collection>
      <Collection>
        <h1>Disabled</h1>
        <Button color="primary" disabled>
          Primary
        </Button>
        <Button color="danger" disabled>
          Danger
        </Button>
        <Button color="default" disabled>
          Default
        </Button>
        <Button color="primary" isInvert disabled>
          Primary
        </Button>
        <Button color="danger" isInvert disabled>
          Danger
        </Button>
        <Button color="default" isInvert disabled>
          Default
        </Button>
      </Collection>
    </StyledStory>
  </Router>
);
