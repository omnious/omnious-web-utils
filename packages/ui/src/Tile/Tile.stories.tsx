// Global import
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Tile } from './Tile';

storiesOf('Component | Tile', module).add(
  'DIY',
  (): JSX.Element => <Tile>{text('children', 'This is `Tile` component')}</Tile>
);
