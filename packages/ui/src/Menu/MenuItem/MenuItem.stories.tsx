// Global import
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Local import
import { MenuItem } from './MenuItem';
import styled from 'styled-components';


storiesOf('Component | Menu.MenuItem', module).add(
  'Inline',
  (): JSX.Element => {
    return (
      <MenuItem text='MenuItemText' onClick={action('handle-click')} />
    );
  }
);

storiesOf('Component | Menu.MenuItem', module).add(
  'Block',
  () => {
    return (
      <MenuItem onClick={action('handle-click')}>
        MenuItemText
      </MenuItem>
    );
  }
);