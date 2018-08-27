// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { TitleBar } from './TitleBar';

storiesOf('Component | TitleBar', module).add(
  'DIY',
  (): JSX.Element => {
    const style = {
      border: '1px solid black',
    };

    return (
      <TitleBar text='Example' style={style}>
        <span>T1</span>
        <span>T2</span>
        <span>T3</span>
      </TitleBar>
    );
  }
);