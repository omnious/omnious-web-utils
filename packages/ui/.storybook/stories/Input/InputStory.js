// Global import
import React from 'react';

// Local import
import { COLORS, Input } from '../../../src';
import { StyledStory } from '../SharedStyles';

export const InputStory = options => (
  <StyledStory>
    <Input type="text" {...options} />
    <Input label="Number" type="number" />
    <Input type="email" />
    <Input type="password" />
  </StyledStory>
);
