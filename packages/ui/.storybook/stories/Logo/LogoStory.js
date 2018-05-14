// Global import
import React from 'react';

// Local import
import { COLORS, Logo } from '../../../src';
import { StyledStory } from '../SharedStyle';

export const LogoStory = options => (
  <StyledStory>
    <Logo {...options} />
  </StyledStory>
);
