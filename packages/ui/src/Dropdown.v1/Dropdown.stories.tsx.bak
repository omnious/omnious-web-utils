// Global import
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Dropdown } from './Dropdown';

const dropdownItems: any[] = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 },
  { label: 'four', value: 4 },
  { label: 'five', value: 5, disabled: true }
];

storiesOf('Component | Form / Dropdown', module)
  .addDecorator(withKnobs)
  // .add('Overview', withInfo()())
  .add(
    'DIY',
    withInfo('Hello dropdown')(
      (): JSX.Element => (
        <Dropdown
          clearable={boolean('clearable', true)}
          disabled={boolean('disabled', false)}
          items={dropdownItems}
          name={text('name', 'dropdown')}
          placeholder={text('placeholder', 'Choose an option')}
          searchable={boolean('searchable', true)}
          selectedValue={select('selectedValue', [1, 2, 3, 4, 5], 1)}
          title={text('title', '')}
          width={text('width', '')}
          handleDropdown={action('handle-dropdown')}
        />
      )
    )
  );
