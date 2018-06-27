// Global import
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Local import
import { Button, ButtonColor } from '.';

storiesOf('Component | Button', module)
  .addDecorator(withKnobs)
  .add(
    'DIY',
    withInfo('Hello button')(
      (): JSX.Element => (
        <Router>
          <Button
            color={select(
              'color',
              [ButtonColor.primary, ButtonColor.danger, ButtonColor.default],
              ButtonColor.primary
            )}
            disabled={boolean('disabled', false)}
            // href={text('href', '')}
            isInvert={boolean('isInvert', false)}
            isLoading={boolean('isLoading', false)}
            size={select('size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')}
            // to={text('to', '')}
            type={select('type', ['button', 'reset', 'submit'], 'button')}
            handleButton={action('handle-button')}
          >
            {text('content', 'This is `Button` Component')}
          </Button>
        </Router>
      )
    )
  );
