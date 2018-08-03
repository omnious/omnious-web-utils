// Global import
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Loader } from './Loader';

storiesOf('Component | Loader', module).add('DIY', () => (
  <Loader
    color={select('color', ['blue', 'red', 'green'], 'blue')}
    isInvert={boolean('isInvert', false)}
    size={select('size', ['lg', 'sm'], 'sm')}
  />
));
