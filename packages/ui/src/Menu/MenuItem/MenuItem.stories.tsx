// Global import
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Local import
import { MenuItem } from './MenuItem';

storiesOf('Component | Menu.MenuItem', module).add(
  'Inline',
  (): JSX.Element => {
    const style: React.CSSProperties = {
      color: 'green',
    };

    return (
      <MenuItem text='MenuItemText' onClick={action('handle-click')} style={style} />
    );
  }
);

storiesOf('Component | Menu.MenuItem', module).add(
  'Block',
  (): JSX.Element => {
    const style: React.CSSProperties = {
      color: 'green',
    };

    return (
      <MenuItem onClick={action('handle-click')} style={style}>
        MenuItemText
      </MenuItem>
    );
  }
);