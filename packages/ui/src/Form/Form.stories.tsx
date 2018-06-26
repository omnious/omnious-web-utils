// Global import
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Input } from '..';

storiesOf('Component | Form', module)
  .addDecorator(withKnobs)
  .add(
    'Input',
    withInfo('Hello input')(
      (): JSX.Element => (
        <Input
          disabled={boolean('disabled', false)}
          label={text('label', '')}
          name={text('name', '')}
          type={select('type', ['text', 'number', 'email', 'password'], 'text')}
        />
      )
    )
  )
  // .add('Dropdown', withInfo('Hello dropdown')((): JSX.Element => <Dropdown />))
  .add('Radio', withInfo('')((): JSX.Element => <Input />))
  .add('Checkbox', withInfo('')((): JSX.Element => <Input />))
  .add('Form', withInfo('')((): JSX.Element => <Input />));
