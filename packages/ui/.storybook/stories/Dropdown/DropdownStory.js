// Global import
import React from 'react';

// Local import
import { COLORS, Dropdown, Input, RadioGroup } from '../../../src';
import { StyledStory } from '../SharedStyles';

/**
 * @description Dropdown story
 *
 * @param {*} options
 * @returns {JSX.Element}
 */
export const DropdownStory = options => (
  <StyledStory>
    <div style={{ display: 'flex' }}>
      <Dropdown title="hello world" />
      <Input label="hello world" />
      <RadioGroup title="hello world" />
    </div>
  </StyledStory>
);
