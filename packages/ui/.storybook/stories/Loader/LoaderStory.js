// Global import
import React from 'react';

// Local import
import { COLORS, Loader } from '../../../src';
import { StyledStory } from '../SharedStyles';
import { InvertCollection } from '.';

export const LoaderStory = options => (
  <StyledStory>
    <InvertCollection>
      <h1>DIY</h1>
      <Loader {...options} />
    </InvertCollection>
  </StyledStory>
);
