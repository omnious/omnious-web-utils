// // Global import
// import { action } from '@storybook/addon-actions';
// import { withInfo } from '@storybook/addon-info';
// import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
// import { storiesOf } from '@storybook/react';
// import * as React from 'react';

// // Local import
// import { Radio } from '.';

// const radioItems: any[] = [
//   { label: 'one', value: '1' },
//   { label: 'two', value: '2' },
//   { label: 'three', value: '3' },
//   { label: 'four', value: '4' },
//   { label: 'five', value: '5', disabled: true }
// ];

// storiesOf('Component | Form / Radio', module)
//   .addDecorator(withKnobs)
//   // .add('Overview', withInfo()())
//   .add(
//     'DIY',
//     withInfo('Hello radio')(
//       (): JSX.Element => (
//         <Radio
//           disabled={boolean('disabled', false)}
//           isVertical={boolean('isVertical', true)}
//           items={radioItems}
//           name={text('name', 'radio')}
//           selectedValue={select('selectedValue', ['1', '2', '3', '4', '5'], '1')}
//           title={text('title', '')}
//           handleRadio={action('handle-radio')}
//         />
//       )
//     )
//   );
