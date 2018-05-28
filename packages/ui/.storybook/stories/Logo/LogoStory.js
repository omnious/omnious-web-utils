// Global import
import React from 'react';

// Local import
import { COLORS, Logo } from '../../../src';
import { StyledStory } from '../SharedStyles';

export const LogoStory = options => (
  <StyledStory>
    <Logo {...options} />
  </StyledStory>
);
