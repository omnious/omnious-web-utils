// Global import
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

// Local import
import ReadMe from '../README.md';

storiesOf('Guide', module).add(
  'README',
  withInfo({ header: false, source: false, text: ReadMe })(() => <div />)
);
