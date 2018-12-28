// CSS import
// import '@omnious/reset';
import './index.css';

// Global import
import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: '@omnious/ui',
  url: 'https://www.npmjs.com/package/@omnious/ui',
  hierarchyRootSeparator: /\|/
});
addDecorator(
  withInfo({
    inline: true,
    styles: base => ({
      ...base,
      infoStory: {
        alignItems: 'flex-start',
        backgroundColor: '#dfe3e6',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '35vh',
        padding: '20px 40px 40px'
      },
      infoBody: {
        ...base.infoBody,
        border: 0
      }
    })
  })
);
addDecorator(withKnobs);

const req = require.context('../src', true, /\.stories.tsx$/);
function loadStories() {
  require('./Welcome.stories');

  for (const filename of req.keys()) {
    req(filename);
  }
}

configure(loadStories, module);
