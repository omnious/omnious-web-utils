import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { App } from './App';

const mountNode = document.getElementById('React');

const init = () => {
  render(<App />, mountNode);
};

if (module.hot) {
  module.hot.accept('./App', () => {
    unmountComponentAtNode(mountNode);
    requestAnimationFrame(init);
  });
}

init();
