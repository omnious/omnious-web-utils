// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

// Local import
import { BorderPanel } from './BorderPanel';

storiesOf('Component | BorderPanel', module).add(
  'DIY',
  (): JSX.Element => {
    const SampleTop: any = styled.header`
      text-align: center;
      height: 50px;
    `;
    const SampleLeft: any = styled.aside`
      flex: 1 auto;
    `;
    const SampleCenter: any = styled.article`
      flex: 1 0px;
    `;
    const SampleRight: any = styled.aside`
      flex: 1 auto;
    `;
    const SampleBottom: any = styled.footer`
      text-align: center;
      height: 50px;
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