// Global import
import { withInfo } from '@storybook/addon-info';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Omnious } from '.';

storiesOf('Component | Icons', module)
  .addDecorator(withKnobs)
  .add(
    'Omnious',
    withInfo('Omnious Logo')(
      (): JSX.Element => (
        <Omnious
          color={select('color', ['primary'], 'primary')}
          isVertical={boolean('isVertical', false)}
        />
      )
    )
  );
