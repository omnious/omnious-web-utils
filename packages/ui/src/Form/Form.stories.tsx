// Global import
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Form } from '.';

const formFields: any[] = [
  {
    name: 'dropdown',
    type: 'select',
    title: 'dropdown',
    items: [{ label: 'a', value: 'a' }, { label: 'b', value: 'b' }]
  },
  { name: 'age', type: 'number', title: 'age' },
  { name: 'password', type: 'password', title: 'text field' },
  { type: 'submit', component: 'submit form' }
];

storiesOf('Component | Form / All', module)
  .addDecorator(withKnobs)
  .add(
    'Form',
    withInfo('Hello form')(
      (): JSX.Element => (
        <Form
          disabled={boolean('disabled', false)}
          fields={formFields}
          isVertical={boolean('isVertical', true)}
          title={text('title', '')}
          handleForm={action('handle-form')}
        />
      )
    )
  );
