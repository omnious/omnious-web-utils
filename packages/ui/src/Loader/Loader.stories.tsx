// Global import
import { withInfo } from '@storybook/addon-info';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Loader } from './Loader';

storiesOf('Component | Loader', module)
  .addDecorator(withKnobs)
  .add(
    'DIY',
    withInfo('Hello loader')(() => (
      <Loader
        color={select('color', ['blue', 'red', 'green'], 'blue')}
        isInvert={boolean('isInvert', false)}
        size={select('size', ['lg', 'sm'], 'sm')}
      />
    ))
  );
