// Global import
import React from 'react';

// Local import
import { COLORS, Dropdown, Input, RadioGroup, Select } from '../../../src';
import { StyledStory } from '../SharedStyles';

const items = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 }
];

/**
 * @description Dropdown story
 *
 * @param {*} options
 * @returns {JSX.Element}
 */
export const DropdownStory = options => (
  <StyledStory>
    <div style={{ display: 'flex' }}>
      <Dropdown
        title="hello world"
        items={items}
        isClearable
        onFocus={(e, f) => {
          console.log('focus', e, f);
        }}
        onChange={(e, f) => {
          console.log(e, f);
        }}
      />
      <Select title="hello world" items={items} />
      <Input label="hello world" />
      <RadioGroup title="hello world" items={items} />
    </div>
  </StyledStory>
);
