// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled, { css } from 'styled-components';

// Local import
import { BorderPanel } from './BorderPanel';

storiesOf('Component | BorderPanel', module).add(
  'DIY',
  (): JSX.Element => {
    const commonStyles = css`
      border: 1px solid black;

      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const SampleTop: any = styled.div`
      height: 100px;
      ${commonStyles}
    `;
    const SampleLeft: any = styled.div`
      ${commonStyles}
    `;
    const SampleCenter: any = styled.div`
      ${commonStyles}
    `;
    const SampleRight: any = styled.div`
      ${commonStyles}
    `;
    const SampleBottom: any = styled.div`
      height: 50px;
      ${commonStyles}
    `;

    return (
      <BorderPanel
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