import 'bootstrap/dist/css/bootstrap-reboot.min';
import 'github-markdown-css/github-markdown';
import '../assets/css';

import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { withDocs } from 'storybook-readme';

import { WelcomeStory } from './WelcomeStory';
import {
  GradientDocs,
  GradientStory,
  PaletteDocs,
  PaletteStory,
  ShadowDocs,
  ShadowStory
} from './Color';
import { ButtonStory, ButtonDocs } from './Button';

storiesOf('Guide', module).add('README', () => <WelcomeStory />);

storiesOf('Guide/Color', module)
  .add('Palettes', withDocs(PaletteDocs, () => <PaletteStory />))
  .add('Gradients', withDocs(GradientDocs, () => <GradientStory />))
  .add('Shadows', withDocs(ShadowDocs, () => <ShadowStory />));

// storiesOf('Guide/Font', module)
//   .add('Fonts', () => <FontStory />);
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
    withDocs(ButtonDocs, () => (
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
    ))
  );

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
