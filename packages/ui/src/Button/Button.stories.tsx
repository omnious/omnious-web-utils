// Global import
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Button } from '.';
import { ColorSet } from '..';

storiesOf('Component | Button', module)
  .addDecorator(withKnobs)
  .add(
    'DIY',
    withInfo('Hello button')(
      (): JSX.Element => (
        <Button
          color={select(
            'color',
            [ColorSet.primary, ColorSet.danger, ColorSet.default, ColorSet.none],
            ColorSet.default
          )}
          disabled={boolean('disabled', false)}
          href={text('href', '')}
          isInvert={boolean('isInvert', false)}
          isLoading={boolean('isLoading', false)}
          size={select('size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')}
          type={select('type', ['button', 'reset', 'submit'], 'button')}
          handleButton={action('handle-button')}
        >
          {text('content', 'This is `Button` Component')}
        </Button>
      )
    )
  );
