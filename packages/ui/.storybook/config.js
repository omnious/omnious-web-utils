import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';


const loadStories = () => {
  require('./stories');
}

setOptions({
  name: '@omnious/kit',
  url: 'https://omniouskit.netlify.com',
  downPanelInRight: window.innerWidth > 1200
});

configure(loadStories, module);