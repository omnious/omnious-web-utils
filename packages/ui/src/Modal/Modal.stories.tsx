// Global import
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createRef } from 'react';

// Local import
import { Modal } from './Modal';

const innerRef = createRef();

storiesOf('Component | Modal', module)
  .addDecorator(withKnobs)
  .add(
    'DIY',
    withInfo('Hello modal')(
      (): JSX.Element => (
        <div>
          <button onClick={() => innerRef.current.show()}>show modal</button>
          <Modal innerRef={innerRef}>modal</Modal>
        </div>
      )
    )
  );
