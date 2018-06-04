// Global import
import * as React from 'react';
import { SFC } from 'react';
import { generate } from 'shortid';

// Local import
import { GroupWrapper, StyledRadioGroup } from '.';
import { Radio } from '..';

// Interface
export interface RadioItemProps {
  disabled?: boolean;
  label: string;
  value: any;
}

export interface RadioGroupProps {
  isVertical: boolean;
  items: RadioItemProps[];
  name: string;
  title: string;
  onChange(e: any): void;
}

// Component
export const RadioGroup: SFC<RadioGroupProps> = ({
  isVertical,
  items,
  name,
  title,
  onChange,
  ...others
}: RadioGroupProps): JSX.Element => (
  <StyledRadioGroup {...others}>
    <h4>{title}</h4>
    <GroupWrapper isVertical={isVertical}>
      {items.map((item: any): JSX.Element => (
        <Radio key={generate()} name={name} onChange={onChange} {...item} />
      ))}
    </GroupWrapper>
  </StyledRadioGroup>
);
