// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { black } from './black';
import { blue } from './blue';
import { gray } from './gray';
import { green } from './green';
import { red } from './red';
import { yellow } from './yellow';
import { white } from './white';
import { Viewer } from '../shared';

storiesOf('Style', module).add(
  'Color',
  () => (
    <div>
      <Viewer color={black.primary} invert>
        <strong>black.primary</strong>
        <h4>#1E232D</h4>
      </Viewer>
      <Viewer color={white.primary}>
        <strong>white.primary</strong>
        <h4>#FFFFFF</h4>
      </Viewer>
      <Viewer color={gray.primary}>
        <strong>gray.primary</strong>
        <h4>#EDEDEE</h4>
      </Viewer>
      <Viewer color={blue.primary} invert>
        <strong>blue.primary</strong>
        <h4>#32C8FF</h4>
      </Viewer>
      <Viewer color={blue.secondary} invert>
        <strong>blue.secondary</strong>
        <h4>#3278FF</h4>
      </Viewer>
      <Viewer color={green.primary} invert>
        <strong>green.primary</strong>
        <h4>#1EC846</h4>
      </Viewer>
      <Viewer color={yellow.primary}>
        <strong>yellow.primary</strong>
        <h4>#FFC828</h4>
      </Viewer>
      <Viewer color={red.primary} invert>
        <strong>red.primary</strong>
        <h4>#FF3C64</h4>
      </Viewer>
    </div>
  ),
  {
    source: false
  }
);
