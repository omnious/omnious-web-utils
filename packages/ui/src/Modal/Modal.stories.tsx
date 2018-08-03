// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createRef } from 'react';

// Local import
import { Modal } from './Modal';

const innerRef: any = createRef();

storiesOf('Component | Modal', module).add(
  'DIY',
  (): JSX.Element => (
    <div>
      <button onClick={(): any => innerRef.current.show()}>show modal</button>
      <Modal innerRef={innerRef}>modal</Modal>
    </div>
  )
);
