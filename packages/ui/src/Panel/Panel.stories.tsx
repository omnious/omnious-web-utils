// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

// Local import
import { Panel } from './Panel';

storiesOf('Component | Panel', module).add(
  'DIY',
  (): JSX.Element => {
    const createContents = () => {
      const StyleWrapper = styled.div`
        text-align: center;
      `;

      return (
        <StyleWrapper>
          Contents
        </StyleWrapper>
      );
    };
    
    const contents = createContents();

    return (
      <Panel title='Panel'>
        {contents}
      </Panel>
    );
  }
);