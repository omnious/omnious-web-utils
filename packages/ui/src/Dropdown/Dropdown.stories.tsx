// Global import
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Dropdown } from './Dropdown';

const dropdownItems: any[] = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 },
  { label: 'four', value: 4 },
  { label: 'five', value: 5, isDisabled: true }
];

storiesOf('Component | Form / Dropdown', module).add(
  'DIY',
  (): JSX.Element => (
    <Dropdown
      clearable={boolean('clearable', true)}
      disabled={boolean('disabled', false)}
      items={dropdownItems}
      name={text('name', 'dropdown')}
      placeholder={text('placeholder', 'Choose an option')}
      searchable={boolean('searchable', true)}
      title={text('title', '')}
      value={number('value', 1)}
      width={text('width', '')}
      onChange={action('handle-dropdown')}
    />
  )
);
