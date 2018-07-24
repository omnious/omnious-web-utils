// Global import
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Arrow } from './Arrow';
import { Cancel } from './Cancel';
import { Check } from './Check';
import { Omnious } from './Omnious';

storiesOf('Component | Icons', module)
  .addDecorator(withKnobs)
  .add(
    'Omnious',
    withInfo('Omnious Logo')(
      (): JSX.Element => (
        <Omnious
          color={select('color', ['blue', 'black', 'white'], 'blue')}
          isVertical={boolean('isVertical', false)}
        />
      )
    )
  );

storiesOf('Component | Icons', module)
  .addDecorator(withKnobs)
  .add(
    'Iconset',
    withInfo({ source: false, text: 'Iconset' })(
      (): JSX.Element => (
        <div>
          <Arrow color={text('color', '#fff')} />
          <Cancel color={text('color', '#fff')} />
          <Check color={text('color', '#fff')} />
        </div>
      )
    )
  );
