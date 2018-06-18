// Global import
import * as React from 'react';
import { Component } from 'react';
// import { generate } from 'shortid';

// Local import
import { ItemWrapper, StyledForm } from '.';
import { Button, Dropdown, Input, Radio } from '..';

// Interface
export interface FormProps {
  className: string;
  isVertical: boolean;
  items: any[];
  // name: string;
  title: string;
  // value: any;
  handleForm(e: any): void;
}

/**
 *
 *
 * @export
 * @class Form
 * @extends {Component<FormProps>}
 */
export class Form extends Component<FormProps> {
  public state: any = {};

  private handleForm = (e: any): void => {
    e.preventDefault();
    const { handleForm }: FormProps = this.props;
    handleForm(this.state);
  };

  private handleRadio = (name: string, value: string): void => {
    this.setState((state: any): any => ({ ...state, [name]: Number(value) }));
  };

  private handleDropdown = (name: string, value: any): void => {
    this.setState((state: any): any => ({ ...state, [name]: value }));
  };

  private handleInput = (name: string, value: string): void => {
    this.setState((state: any): any => ({ ...state, [name]: value }));
  };

  private renderItems = (): any => {
    const { items = [] }: FormProps = this.props;

    if (!items.length) {
      return 'No items';
    }

    return items.map(
      ({ component, items, name, type, ...others }: any): JSX.Element => {
        switch (type) {
          case 'checkbox':
            return <div>checkbox</div>;
          case 'radio':
            return (
              <Radio
                key={name}
                items={items}
                name={name}
                selected={this.state[name]}
                handleRadio={this.handleRadio}
                {...others}
              />
            );
          case 'select':
            return (
              <Dropdown
                key={name}
                items={items}
                name={name}
                selected={this.state[name]}
                handleDropdown={this.handleDropdown}
                {...others}
              />
            );
          case 'submit':
            return (
              <Button key={name} type={type} {...others}>
                {component}
              </Button>
            );
          default:
            return (
              <Input
                key={name}
                name={name}
                type={type}
                value={this.state[name]}
                handleInput={this.handleInput}
                {...others}
              />
            );
        }
      }
    );
  };

  public render(): JSX.Element {
    const { className, isVertical = true, title, handleForm, ...others }: FormProps = this.props;

    return (
      <StyledForm className={className} {...others}>
        <h4>{title}</h4>
        <ItemWrapper isVertical={isVertical} onSubmit={this.handleForm}>
          {this.renderItems()}
        </ItemWrapper>
      </StyledForm>
    );
  }
}
