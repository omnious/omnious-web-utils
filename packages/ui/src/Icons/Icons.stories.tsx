// Global import
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Arrow } from './Arrow';
import { Cancel } from './Cancel';
import { Check } from './Check';
import { Omnious } from './Omnious';

storiesOf('Component | Icons', module).add(
  'Omnious',
  (): JSX.Element => (
    <Omnious
      color={select('color', ['blue', 'black', 'white'], 'blue')}
      isVertical={boolean('isVertical', false)}
    />
  )
);

storiesOf('Component | Icons', module).add(
  'Iconset',
  (): JSX.Element => (
    <div>
      <Arrow color={text('color', '#fff')} />
      <Cancel color={text('color', '#fff')} />
      <Check color={text('color', '#fff')} />
    </div>
  ),
  {
    info: { source: false }
  }
);
