// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Cropbox } from './Cropbox';

storiesOf('Component | Cropbox', module).add('DIY', (): JSX.Element => <Cropbox>cropbox</Cropbox>);
