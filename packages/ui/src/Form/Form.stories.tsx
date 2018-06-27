// Global import
import { withInfo } from '@storybook/addon-info';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Form } from '.';

const formItems: any[] = [
  { type: 'select', title: 'dropdown', items: [{ label: 'a' }, { label: 'b' }] },
  { type: 'number', title: 'age' },
  { type: 'password', title: 'text field' }
];

storiesOf('Component | Form / All', module)
  .addDecorator(withKnobs)
  .add(
    'Form',
    withInfo('Hello form')(
      (): JSX.Element => {
        return (
          <Form
            disabled={boolean('disabled', false)}
            isVertical={boolean('isVertical', true)}
            items={formItems}
            title={text('title', '')}
          />
        );
      }
    )
  );
