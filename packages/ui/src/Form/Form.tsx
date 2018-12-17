// Global import
import * as React from 'react';
import { PureComponent } from 'react';

// Local import
import { FieldWrapper, StyledForm, Title } from './styles';
import { Props, State } from './types';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Input } from '../Input';

function initializeData(fields = []) {
  return fields.reduce(
    (result, item) => ({
      ...result,
      [item.name]: ''
    }),
    {}
  );
}

export class FormComponent extends PureComponent<Props, State> {
  public state = {
    data: initializeData(this.props.fields)
  };

  private onSubmit = (): void => {
    this.props.onSubmit(this.state.data);
  };

  private onChange = (value: any, name: any): void => {
    this.setState(
      (state: any): any => ({
        ...state,
        data: {
          ...state.data,
          [name]: value
        }
      })
    );
  };

  private renderFields = (): string | JSX.Element[] => {
    const { fields = [] } = this.props;

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
                value={this.state.data[name]}
                width="100%"
                onChange={this.onChange}
              />
            );
          case 'submit':
            return (
              <Button color="blue" type={type} onClick={this.onSubmit}>
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
                value={this.state.data[name]}
                width="100%"
                onChange={this.onChange}
              />
            );
        }
      }
    );
  };

  public render() {
    const {
      className,
      disabled = false,
      fieldClass,
      title = '',
      titleClass,
      vertical = true,
      width
    } = this.props;

    return (
      <div className={className} disabled={disabled}>
        {title && <Title className={titleClass}>{title}</Title>}
        <FieldWrapper
          className={fieldClass}
          vertical={vertical}
          width={width}
          onSubmit={this.onSubmit}
        >
          {this.renderFields()}
        </FieldWrapper>
      </div>
    );
  }
}
