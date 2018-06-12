// Global import
import React from 'react';

// Local import
import { RadioGroup } from '../../../src';

const items = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 },
  { label: 'four', value: 4 }
];

function handleRadio(e) {
  console.log('evt!!', e);
}

// Component
export const RadioGroupStory = props => (
  <div>
    <RadioGroup
      isVertical
      name="test"
      title="radio group"
      items={items}
      handleRadio={handleRadio}
    />
  </div>
);
