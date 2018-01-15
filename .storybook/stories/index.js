import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../../src/Button';


// storiesOf('Guide', module)
//   .add('Colors', () => null)
//   .add('Gradients', () => null)
//   .add('Font size', () => null)
//   .add('Font weight', () => null)
//   .add('Spacing', () => null)
//   .add('Icon size', () => null);

// storiesOf('Badge', module);

// storiesOf('Banner', module);

storiesOf('Button', module)
  .add('Basic usage', () => <Button>hello world</Button>)
  .add('Color', () => <Button />)
  .add('Invert', () => <Button />)
  .add('Icon', () => <Button />)
  .add('Stats', () => <Button />);

// storiesOf('Card', module);

// storiesOf('Checkbox', module);

// storiesOf('Dropdown', module);

// storiesOf('Dialog', module);

// storiesOf('Grid', module);

// storiesOf('Icon', module);

// storiesOf('Input', module);

// storiesOf('List', module);

// storiesOf('Logo', module)
//   .add('Omnious company logo', () => null)
//   .add('Omnious tagger logo', () => null);

// storiesOf('Modal', module);

// storiesOf('Pagination', module);

// storiesOf('Paper', module);

// storiesOf('Progress', module);

// storiesOf('Radio', module);

// storiesOf('Select', module);

// storiesOf('Spinner', module);

// storiesOf('Tab', module);

// storiesOf('Table', module);

// storiesOf('Textarea', module);

// storiesOf('Toggle', module);

// storiesOf('Tooltip', module);
