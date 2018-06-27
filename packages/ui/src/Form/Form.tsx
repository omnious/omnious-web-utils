// Global import
import * as React from 'react';
import { Component } from 'react';
import { generate } from 'shortid';

// Local import
import { FormFieldWrapper, FormProps, FormTitle, StyledForm } from '.';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Input } from '../Input';

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
    console.log('enter!', this.state);
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

  private renderFields = (): string | JSX.Element[] => {
    const { fields = [] }: FormProps = this.props;

    if (!fields.length) {
      return 'No fields';
    }

    return fields.map(
      ({ component, items, name, title, type }: any): JSX.Element => {
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
                key={name}
                items={items}
                name={name}
                title={title}
                handleDropdown={this.handleDropdown}
              />
            );
          case 'submit':
            return (
              <Button key={generate()} type={type}>
                {component}
              </Button>
            );
          default:
            return (
              <Input
                key={name}
                name={name}
                title={title}
                type={type}
                handleInput={this.handleInput}
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
        <FormFieldWrapper className={className} isVertical={isVertical} onSubmit={this.handleForm}>
          {this.renderFields()}
        </FormFieldWrapper>
      </StyledForm>
    );
  }
}
