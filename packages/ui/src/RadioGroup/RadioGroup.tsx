// Global import
import * as React from 'react';
import { SFC } from 'react';
import { generate } from 'shortid';

// Local import
import { Radio } from '..';

// Interface
export interface RadioGroupProps {
  items: any[];
  name: string;
  title: string;
  handleRadio(e: any): void;
}

// Component
export const RadioGroupComponent: SFC<RadioGroupProps> = ({
  items,
  name,
  title,
  handleRadio,
  ...others
}: RadioGroupProps): JSX.Element => (
  <form onChange={handleRadio} {...others}>
    <h4>{title}</h4>
    {items.map((item: any): JSX.Element => <Radio key={generate()} name={name} {...item} />)}
  </form>
);
