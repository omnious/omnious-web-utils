// Global import
import React from 'react';

// Local import
import { Tile } from '../../../src';
import { StyledStory } from '../SharedStyle';

// Component
export const TileStory = () => (
  <StyledStory>
    <Tile>
      <h1>{'This is Tile header!'}</h1>
      <p>{'Tile contents'}</p>
    </Tile>
  </StyledStory>
);
