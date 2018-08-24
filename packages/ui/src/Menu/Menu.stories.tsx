// Global import
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

// Local import
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

storiesOf('Component | Menu', module).add(
  'Vertical',
  (): JSX.Element => {
    return (
      <Menu vertical collapsible={false}>
        <MenuItem text='MenuItem_1' onClick={action('handle-click')} />
        <MenuItem text='MenuItem_2' onClick={action('handle-click')} />
        <MenuItem>
          <Menu text='MenuItem_3_expandable' expanded={false}>
            <MenuItem onClick={action('handle-click')}>SubMenuItem_1</MenuItem>
            <MenuItem onClick={action('handle-click')}>SubMenuItem_2</MenuItem>
            <MenuItem onClick={action('handle-click')}>SubMenuItem_3</MenuItem>
          </Menu>
        </MenuItem>
        <MenuItem text='MenuItem_4' onClick={action('handle-click')} />
      </Menu>
    );
  }
);

storiesOf('Component | Menu', module).add(
  'Horizontal',
  (): JSX.Element => {
    const StyledMenuItem: any = styled(MenuItem)`
      margin: 10px;
    `;

    return (
      <Menu vertical={false} collapsible={false}>
        <StyledMenuItem text='MenuItem_1' onClick={action('handle-click')} />
        <StyledMenuItem text='MenuItem_2' onClick={action('handle-click')} />
        <StyledMenuItem>
          <Menu vertical={false} text='MenuItem_3_expandable' expanded={false}>
            <StyledMenuItem onClick={action('handle-click')}>SubMenuItem_1</StyledMenuItem>
            <StyledMenuItem onClick={action('handle-click')}>SubMenuItem_2</StyledMenuItem>
            <StyledMenuItem onClick={action('handle-click')}>SubMenuItem_3</StyledMenuItem>
          </Menu>
        </StyledMenuItem>
        <StyledMenuItem text='MenuItem_4' onClick={action('handle-click')} />
      </Menu>
    );
  }
);