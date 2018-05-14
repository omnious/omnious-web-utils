import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const loadStories = () => {
  require('./stories');
};

setOptions({
  name: '@omnious/ui',
  url: 'https://www.npmjs.com/package/@omnious/ui',
  downPanelInRight: window.innerWidth > 1200
});

configure(loadStories, module);
