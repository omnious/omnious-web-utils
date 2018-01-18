import { boolean } from '@storybook/addon-knobs';
import React, { Component } from 'react';

import Button from '../../../src';


export default class ButtonStory extends Component {
  render() {
    const { children, dark, disabled } = this.props;
    return (
      <Button disabled={disabled} dark={dark}>
        {children}
      </Button>
    );
  }
}
