// Global import
import * as React from 'react';
import { Component, FormHTMLAttributes } from 'react';
import { generate } from 'shortid';

// Local import
import { FormFieldWrapper, FormTitle, StyledForm } from './styles';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Input } from '../Input';

export interface FormFieldProps {}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  disabled?: boolean;
  fields?: FormFieldProps[];
  isVertical?: boolean;
  width?: string;
  handleForm(data: any): void;
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

  private onSubmit = (): void => {
    const { onSubmit }: FormProps = this.props;
    onSubmit && onSubmit(this.state);
  };

  private onChange = (name: string, value: any): void => {
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
          case 'dropdown':
            return (
              <Dropdown
                key={name}
                items={items}
                name={name}
                title={title}
                value={this.state[name]}
                width="100%"
                onChange={this.onChange}
              />
            );
          case 'submit':
            return (
              <Button key={generate()} color="blue" type={type} onClick={this.onSubmit}>
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
                width="100%"
                onChange={this.onChange}
              />
            );
        }
      }
    );
  };

  public render(): JSX.Element {
    const {
      className,
      disabled = false,
      isVertical = true,
      title = '',
      width
    }: FormProps = this.props;

    return (
      <StyledForm disabled={disabled}>
        {title && <FormTitle>{title}</FormTitle>}
        <FormFieldWrapper
          className={className}
          isVertical={isVertical}
          width={width}
          onSubmit={this.onSubmit}
        >
          {this.renderFields()}
        </FormFieldWrapper>
      </StyledForm>
    );
  }
}
