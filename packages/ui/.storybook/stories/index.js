// CSS import
// import 'bootstrap/dist/css/bootstrap-reboot.min';
import 'github-markdown-css/github-markdown';
import '../css';

// Global import
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { withDocs } from 'storybook-readme';

// Local import
import { ButtonDocs, ButtonStory } from './Button';
import { GradientDocs, GradientStory, SolidDocs, SolidStory } from './Color';
import { DropdownDocs, DropdownStory } from './Dropdown';
import { OmniousDocs, OmniousStory } from './Icons';
import { InputDocs, InputStory } from './Input';
import { LoaderDocs, LoaderStory } from './Loader';
import { RadioDocs, RadioGroupDocs, RadioGroupStory, RadioStory } from './Radio';
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

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add(
    'Omnious',
    withDocs(OmniousDocs, () => (
      <OmniousStory
        color={select('color', ['blue', 'white', 'black'], 'blue')}
        isVertical={boolean('isVertical', false)}
      />
    ))
  );

storiesOf('Tile', module)
  .addDecorator(withKnobs)
  .add('Basic tile', withDocs(TileDocs, () => <TileStory />));

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Single button',
    withDocs(ButtonDocs, () => (
      <ButtonStory
        color={select('color', ['primary', 'danger', 'default'], 'primary')}
        disabled={boolean('disabled', false)}
        isInvert={boolean('isInvert', false)}
        isLoading={boolean('isLoading', false)}
        size={select('size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')}
        to={text('to', 'https://www.omnious.com')}
        onClick={action('Button click')}
      >
        {text('content', 'This is `<Button />`!')}
      </ButtonStory>
    ))
  );

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add('Single radio', withDocs(RadioDocs, () => <RadioStory />))
  .add('Group radio', withDocs(RadioGroupDocs, () => <RadioGroupStory />));

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .add(
    'Circular loader',
    withDocs(LoaderDocs, () => (
      <LoaderStory
        color={select('color', ['primary', 'danger', 'default'], 'primary')}
        size={select('size', ['lg', 'sm'], 'sm')}
        isInvert={boolean('isInvert', false)}
      />
    ))
  );

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Single line input', withDocs(InputDocs, () => <InputStory />));

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('Dropdown', withDocs(DropdownDocs, () => <DropdownStory />));

// storiesOf('Badge', module);

// storiesOf('Banner', module);

// storiesOf('Checkbox', module);

// storiesOf('Dropdown', module);

// storiesOf('Dialog', module);

// storiesOf('Grid', module);

// storiesOf('Icon', module);

// storiesOf('List', module);

// storiesOf('Modal', module);

// storiesOf('Pagination', module);

// storiesOf('Progress', module);

// storiesOf('Select', module);

// storiesOf('Tab', module);

// storiesOf('Table', module);

// storiesOf('Textarea', module);

// storiesOf('Toggle', module);

// storiesOf('Tooltip', module);
