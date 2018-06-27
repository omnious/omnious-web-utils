// Global import
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Input } from '.';

storiesOf('Component | Form / Input', module)
  .addDecorator(withKnobs)
  // .add('Overview', withInfo()())
  .add(
    'DIY',
    withInfo('Hello input')(
      (): JSX.Element => (
        <Input
          disabled={boolean('disabled', false)}
          placeholder={text('placeholder', '')}
          name={text('name', 'input')}
          title={text('title', '')}
          type={select('type', ['text', 'number', 'email', 'password'], 'text')}
          handleInput={action('handle-input')}
        />
      )
    )
  );
