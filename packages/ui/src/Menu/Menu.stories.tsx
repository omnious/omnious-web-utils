// Global import
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Local import
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

storiesOf('Component | Menu', module).add(
  'Vertical',
  (): JSX.Element => {
    const style: React.CSSProperties = {
      fontWeight: 'bold',
    };

    return (
      <Menu vertical collapsible={false} style={style}>
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
    const style: React.CSSProperties = {
      fontWeight: 'bold',
    };
    const itemStyle: React.CSSProperties = {
      margin: '10px',
    };

    return (
      <Menu vertical={false} collapsible={false} style={style}>
        <MenuItem text='MenuItem_1' onClick={action('handle-click')} style={itemStyle} />
        <MenuItem text='MenuItem_2' onClick={action('handle-click')} style={itemStyle} />
        <MenuItem style={itemStyle}>
          <Menu vertical={false} text='MenuItem_3_expandable' expanded={false}>
            <MenuItem onClick={action('handle-click')} style={itemStyle}>SubMenuItem_1</MenuItem>
            <MenuItem onClick={action('handle-click')} style={itemStyle}>SubMenuItem_2</MenuItem>
            <MenuItem onClick={action('handle-click')} style={itemStyle}>SubMenuItem_3</MenuItem>
          </Menu>
        </MenuItem>
        <MenuItem text='MenuItem_4' onClick={action('handle-click')} style={itemStyle} />
      </Menu>
    );
  }
);