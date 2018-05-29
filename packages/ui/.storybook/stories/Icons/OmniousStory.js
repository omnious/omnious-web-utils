// Global import
import React from 'react';

// Local import
import { COLORS, Omnious } from '../../../src';
import { StyledStory } from '../SharedStyles';

export const OmniousStory = options => (
  <StyledStory>
    <Omnious {...options} />
  </StyledStory>
);
