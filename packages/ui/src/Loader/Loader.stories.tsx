// Global import
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { ProgressCircle } from './ProgressCircle';
import { Spinner } from './Spinner';

storiesOf('Component | Loader', module)
  .add('ProgressBar', () => null)
  .add('ProgressCircle', () => <ProgressCircle />)
  .add('Spinner', () => (
    <Spinner
      color={select('color', ['blue', 'red', 'green'], 'blue')}
      size={select('size', ['sm', 'md', 'lg'], 'md')}
    />
  ));
