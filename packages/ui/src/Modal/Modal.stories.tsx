// Global import
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Modal } from './Modal';

storiesOf('Component | Modal', module).add(
  'DIY',
  (): JSX.Element => (
    <Modal show={boolean('show', false)}>{text('children', 'This is `Modal` component')}</Modal>
  )
);
