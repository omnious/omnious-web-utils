// // Global import
// import { action } from '@storybook/addon-actions';
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
//   .add(
//     'DIY',
//     (): JSX.Element => (
//         <Radio
//           disabled={boolean('disabled', false)}
//           vertical={boolean('vertical', true)}
//           items={radioItems}
//           name={text('name', 'radio')}
//           selectedValue={select('selectedValue', ['1', '2', '3', '4', '5'], '1')}
//           title={text('title', '')}
//           handleRadio={action('handle-radio')}
//         />
//       )
//   );
