// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

// Local import
import { Panel } from './Panel';

storiesOf('Component | Panel', module).add(
  'DIY',
  (): JSX.Element => {
    return (
      <Panel>
        <div>
          Panel
        </div>
      </Panel>
    );
  }
);