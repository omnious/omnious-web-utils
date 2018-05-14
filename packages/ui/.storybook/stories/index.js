// CSS import
import 'bootstrap/dist/css/bootstrap-reboot.min';
import 'github-markdown-css/github-markdown';
import '../assets/css';

// Global import
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { withDocs } from 'storybook-readme';

// Local import
import { ButtonDocs, ButtonStory } from './Button';
import { GradientDocs, GradientStory, SolidDocs, SolidStory } from './Color';
import { LogoDocs, LogoStory } from './Logo';
import { TileDocs, TileStory } from './Tile';
import { TypographyDocs, TypographyStory } from './Typography';
import { WelcomeStory } from './Welcome';

storiesOf('Guide', module).add('README', () => <WelcomeStory />);

storiesOf('Guide', module).add('Typography', withDocs(TypographyDocs, () => <TypographyStory />));

storiesOf('Guide/Color', module)
  .add('Solid', withDocs(SolidDocs, () => <SolidStory />))
  .add('Gradient', withDocs(GradientDocs, () => <GradientStory />));
// .add('Shadows', withDocs(ShadowDocs, () => <ShadowStory /> ));

//   .add('Fonts', () => <FontStory />);
//   .add('Font size', () => null)
//   .add('Font weight', () => null)
//   .add('Spacing', () => null)
//   .add('Icon size', () => null);

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add(
    'Omnious',
    withDocs(LogoDocs, () => (
      <LogoStory
        color={select('color', ['blue', 'white', 'black'], 'blue')}
        isVertical={boolean('isVertical', false)}
      />
    ))
  );

// storiesOf('Badge', module);

// storiesOf('Banner', module);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Single Button',
    withDocs(ButtonDocs, () => (
      <ButtonStory
        color={select('color', ['primary', 'danger'], 'primary')}
        disabled={boolean('disabled', false)}
        isInvert={boolean('isInvert', false)}
        isLoading={boolean('isLoading', false)}
        size={select('size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')}
        onClick={action('Button click')}
      >
        {text('content', 'This is `<Button />`!')}
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

storiesOf('Tile', module)
  .addDecorator(withKnobs)
  .add('Basic Tile', withDocs(TileDocs, () => <TileStory />));

// storiesOf('Toggle', module);

// storiesOf('Tooltip', module);
