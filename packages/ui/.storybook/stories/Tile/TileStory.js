// Global import
import React from 'react';

// Local import
import { Tile } from '../../../src';
import { StyledStory } from '../SharedStyles';

// Component
export const TileStory = () => (
  <StyledStory>
    <Tile>
      <h1>{'This is Tile header!'}</h1>
    </Tile>
  </StyledStory>
);
