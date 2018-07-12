// Global import
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { A } from './A';

storiesOf('Component | A', module)
  .addDecorator(withKnobs)
  .add(
    'DIY',
    withInfo('Hello a')(() => (
      <A
        color={select('color', ['blue', 'red', 'green', 'none'], 'none')}
        disabled={boolean('disabled', false)}
        href={text('href', '')}
        isInvert={boolean('isInvert', false)}
        size={select('size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')}
      >
        {text('content', 'This is `A` Component')}
      </A>
    ))
  );
