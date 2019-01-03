// Global import
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Form } from '.';

const formFields: any[] = [
  {
    name: 'dropdown',
    type: 'dropdown',
    title: 'dropdown',
    items: [{ label: 'a', value: 'a' }, { label: 'b', value: 'b' }]
  },
  { name: 'age', type: 'number', title: 'age' },
  { name: 'password', type: 'password', title: 'text field' },
  { type: 'submit', component: 'submit form' }
];

storiesOf('Component | Form / All', module).add(
  'Form',
  (): JSX.Element => (
    <Form
      disabled={boolean('disabled', false)}
      fields={formFields}
      title={text('title', '')}
      vertical={boolean('vertical', true)}
      onSubmit={action('handle-form')}
    />
  )
);
