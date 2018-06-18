// Global import
import * as React from 'react';
import { Component } from 'react';
import { generate } from 'shortid';

// Local import
import { ItemWrapper, StyledRadio } from '.';
import { RadioItem, RadioItemProps } from '..';

// Interface
export interface RadioProps {
  className: string;
  isVertical: boolean;
  items: RadioItemProps[];
  name: string;
  selected: any;
  title: string;
  handleRadio(e: any): void;
}

/**
 *
 *
 * @export
 * @class Radio
 * @extends {Component<RadioProps>}
 */
export class Radio extends Component<RadioProps> {
  // private handleRadio = (e: any): void => {
  //   e.preventDefault();
  //   const { label, value, handleRadio }: any = this.props;
  //   console.log('enter!', e.target);

  //   handleRadio({ label, value });
  // };

  private renderItems = (): any => {
    const { items = [], name, selected, handleRadio }: RadioProps = this.props;

    if (!items.length) {
      return 'No items';
    }

    return items.map(
      (item: RadioItemProps): JSX.Element => (
        <RadioItem
          checked={selected === item.value}
          key={generate()}
          name={name}
          handleRadio={handleRadio}
          {...item}
        />
      )
    );
  };

  public render(): JSX.Element {
    const { className, isVertical = true, title, ...others }: RadioProps = this.props;

    return (
      <StyledRadio className={className} {...others}>
        <h4>{title}</h4>
        <ItemWrapper isVertical={isVertical}>{this.renderItems()}</ItemWrapper>
      </StyledRadio>
    );
  }
}
