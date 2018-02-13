import 'bootstrap/dist/css/bootstrap-reboot.min';
import 'github-markdown-css/github-markdown';
import '../assets/css';

import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { withDocs } from 'storybook-readme';

import Welcome from './Welcome';
import PaletteDocs from './Color/PaletteDocs.md';
import PaletteStory from './Color/PaletteStory';
import GradientDocs from './Color/GradientDocs.md';
import GradientStory from './Color/GradientStory';
import ShadowDocs from './Color/ShadowDocs.md';
import ShadowStory from './Color/ShadowStory';

import FontDocs from './Font/Docs.md';
import FontStory from './Font/FontStory';

import ButtonStory from './Button/ButtonStory';
import ButtonDocs from './Button/Docs.md';


storiesOf('Guide', module)
  .add('README', () => <Welcome />);

storiesOf('Guide/Color', module)
  .add('Palettes', withDocs(PaletteDocs, () => <PaletteStory />))
  .add('Gradients', withDocs(GradientDocs, () => <GradientStory />))
  .add('Shadows', withDocs(ShadowDocs, () => <ShadowStory />));

storiesOf('Guide/Font', module)
  .add('Fonts', () => <FontStory />);
//   .add('Font size', () => null)
//   .add('Font weight', () => null)
//   .add('Spacing', () => null)
//   .add('Icon size', () => null);

// storiesOf('Badge', module);

// storiesOf('Banner', module);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Single Button',
    withDocs(
      ButtonDocs,
      () => (
        <ButtonStory
          color={select('color', ['primary', 'secondary', 'default'], 'primary')}
          invert={boolean('invert', false)}
          size={select('size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')}
          disabled={boolean('disabled', false)}
          loading={boolean('loading', false)}
          onClick={action('Button click')}
        >
          {text('Content', 'This is `<Button />`!')}
        </ButtonStory>
      )
    )
  )
  // .add('Color', () => <Button />)
  // .add('Invert', () => <Button />)
  // .add('Icon', () => <Button />)
  // .add('Stats', () => <Button />);

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
