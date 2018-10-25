// Global import
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Input } from './Input';

storiesOf('Component | Form / Input', module).add(
  'DIY',
  (): JSX.Element => (
    <Input
      defaultValue={text('defaultValue', '')}
      disabled={boolean('disabled', false)}
      name={text('name', 'input')}
      placeholder={text('placeholder', '')}
      title={text('title', '')}
      type={select('type', ['text', 'number', 'email', 'password'], 'text')}
      value={text('value', '')}
      width={text('width', '')}
      onChange={action('handle-input')}
    />
  )
);
