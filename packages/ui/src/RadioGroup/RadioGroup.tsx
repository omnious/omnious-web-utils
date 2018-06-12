// Global import
import * as React from 'react';
import { Component } from 'react';
import { generate } from 'shortid';

// Local import
import { GroupWrapper, StyledRadioGroup } from '.';
import { Radio } from '..';

// Interface
export interface RadioItemProps {
  disabled: boolean;
  label: string;
  value: any;
}

export interface RadioGroupProps {
  className: string;
  isVertical: boolean;
  items: RadioItemProps[];
  name: string;
  title: string;
  value: any;
  handleRadio(e: any): void;
}

export class RadioGroup extends Component<RadioGroupProps> {
  private renderRadio = (): any => {
    const { items, name, value, handleRadio }: any = this.props;

    if (!items) {
      return 'no items';
    }

    return items.map(
      (item: any): JSX.Element => (
        <Radio key={generate()} name={name} selected={value} handleRadio={handleRadio} {...item} />
      )
    );
  };

  public render(): JSX.Element {
    const { className, isVertical, title, ...others }: any = this.props;

    return (
      <StyledRadioGroup className={className} {...others}>
        <h4>{title}</h4>
        <GroupWrapper isVertical={isVertical}>{this.renderRadio()}</GroupWrapper>
      </StyledRadioGroup>
    );
  }
}
