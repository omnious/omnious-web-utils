// Global import
import * as React from 'react';
import { SFC } from 'react';

// Local import
import { Radio } from '..';

// Interface
export interface RadioGroupProps {
  className?: string;
  items: any[];
  name: string;
  title: string;
  handleRadio(e: any): void;
}

// Component
export const RadioGroupComponent: SFC<RadioGroupProps> = ({
  className,
  items,
  name,
  title,
  handleRadio
}: RadioGroupProps): JSX.Element => (
  <form className={className} onChange={handleRadio}>
    <h4>{title}</h4>
    {items.map((item: any): JSX.Element => <Radio name={name} {...item} />)}
  </form>
);
