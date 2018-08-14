// Global import
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Button } from './Button';

storiesOf('Component | Button', module).add(
  'DIY',
  (): JSX.Element => (
    <Button
      color={select('color', ['blue', 'red', 'green', 'default', 'none'], 'default')}
      disabled={boolean('disabled', false)}
      isInvert={boolean('isInvert', false)}
      isLoading={boolean('isLoading', false)}
      name={text('name', 'button')}
      size={select('size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')}
      type={select('type', ['button', 'reset', 'submit'], 'button')}
      value={text('value', 'hello value')}
      width={text('width', '')}
      onClick={action('handle-button')}
    >
      {text('content', 'This is `Button` component')}
    </Button>
  )
);
