// Global import
import * as React from 'react';
import { Component } from 'react';
// import { generate } from 'shortid';

// Local import
import { FormItemWrapper, FormTitle, StyledForm } from '.';
import { CommonProps, Dropdown, Input } from '..';

// Interface
export interface FormProps extends CommonProps {
  disabled?: boolean;
  isVertical?: boolean;
  items?: any[];
  title?: string;
  // handleForm(e: any): void;
}

/**
 *
 *
 * @export
 * @class Form
 * @extends {Component<FormProps>}
 */
export class Form extends Component<FormProps> {
  // public state: any = {};

  private handleForm = (e: any): void => {
    e.preventDefault();
    //   const { handleForm }: FormProps = this.props;
    //   handleForm(this.state);
  };

  // private handleRadio = (name: string, value: string): void => {
  //   this.setState((state: any): any => ({ ...state, [name]: Number(value) }));
  // };

  private handleDropdown = (name: string, value: any): void => {
    this.setState((state: any): any => ({ ...state, [name]: value }));
  };

  private handleInput = (name: string, value: string): void => {
    this.setState((state: any): any => ({ ...state, [name]: value }));
  };

  private renderItems = (): string | JSX.Element[] => {
    const { items = [] }: FormProps = this.props;

    if (!items.length) {
      return 'No items';
    }

    return items.map(
      ({ items, name, title, type }: any): JSX.Element => {
        switch (type) {
          //         case 'checkbox':
          //           return <div>checkbox</div>;
          // case 'radio':
          //           return (
          //             <Radio
          //               key={name}
          //               items={items}
          //               name={name}
          //               selected={this.state[name]}
          //               handleRadio={this.handleRadio}
          //               {...others}
          //             />
          //           );
          case 'select':
            return (
              <Dropdown
                // key={name}
                items={items}
                name={name}
                placeholder=""
                title={title}
                selectedValue={null}
                // selected={this.state[name]}
                handleDropdown={this.handleDropdown}
                // {...others}
              />
            );
          //         case 'submit':
          //           return (
          //             <Button key={generate()} type={type} {...others}>
          //               {component}
          //             </Button>
          //           );
          default:
            return (
              <Input
                key={name}
                name={name}
                title={title}
                type={type}
                // value={this.state[name]}
                handleInput={this.handleInput}
                // {...others}
              />
            );
        }
      }
    );
  };

  public render(): JSX.Element {
    const { className, disabled = false, isVertical = true, title = '' }: FormProps = this.props;

    return (
      <StyledForm disabled={disabled}>
        {title && <FormTitle>{title}</FormTitle>}
        <FormItemWrapper className={className} isVertical={isVertical} onSubmit={this.handleForm}>
          {this.renderItems()}
        </FormItemWrapper>
      </StyledForm>
    );
  }
}
