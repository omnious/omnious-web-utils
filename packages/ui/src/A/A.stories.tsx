// Global import
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { A } from './A';

storiesOf('Component | A', module).add(
  'DIY',
  (): JSX.Element => (
    <A
      color={select('color', ['blue', 'red', 'green', 'none'], 'none')}
      disabled={boolean('disabled', false)}
      href={text('href', '')}
      invert={boolean('invert', false)}
      size={select('size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')}
    >
      {text('content', 'This is `A` Component')}
    </A>
  )
);
