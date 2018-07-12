// Global import
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Tile } from './Tile';

storiesOf('Component | Tile', module)
  .addDecorator(withKnobs)
  // .add('Overview', withInfo()())
  .add(
    'DIY',
    withInfo('Hello input')(
      (): JSX.Element => <Tile>{text('children', 'This is `Tile` component')}</Tile>
    )
  );
