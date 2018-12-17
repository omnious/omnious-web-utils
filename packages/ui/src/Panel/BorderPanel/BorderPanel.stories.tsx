// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled, { css } from 'styled-components';

// Local import
import {
  BorderPanel,
  Top,
  Left,
  Center,
  Right,
  Bottom,
} from './BorderPanel';

storiesOf('Component | BorderPanel', module).add(
  'DIY',
  (): JSX.Element => {
    const commonStyles = css`
      border: 1px solid black;

      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const SampleTop: any = styled(Top)`
      height: 100px;
      ${commonStyles}
    `;
    const SampleLeft: any = styled(Left)`
      ${commonStyles}
      flex: 0 0 150px;
    `;
    const SampleCenter: any = styled(Center)`
      ${commonStyles}
      flex: 1 1 auto;
    `;
    const SampleRight: any = styled(Right)`
      ${commonStyles}
      flex: 0 0 100px;
    `;
    const SampleBottom: any = styled(Bottom)`
      height: 50px;
      ${commonStyles}
    `;

    return (
      <BorderPanel
        title='BorderPanel'

        top={
          <SampleTop>
            Top
          </SampleTop>
        }
        left={
          <SampleLeft>
            Left
          </SampleLeft>
        }
        center={
          <SampleCenter>
            Center
          </SampleCenter>
        }
        right={
          <SampleRight>
            Right
          </SampleRight>
        }
        bottom={
          <SampleBottom>
            Bottom
          </SampleBottom>
        }
      />
    );
  }
);