// Global import
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Cropbox } from './Cropbox';

storiesOf('Component | Cropbox', module)
  .addDecorator(withKnobs)
  .add('DIY', withInfo('Hello cropbox')((): JSX.Element => <Cropbox>cropbox</Cropbox>));
