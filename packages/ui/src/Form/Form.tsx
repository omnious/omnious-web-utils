// Global import
import * as React from 'react';
import { PureComponent } from 'react';

// Local import
import { FieldWrapper, Title } from './styles';
import { Props, State } from './types';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Input } from '../Input';

function initializeData(fields = []) {
  return fields.slice(0, -1).reduce(
    (result, item) => ({
      ...result,
      [item.name]: ''
    }),
    {}
  );
}

export class FormComponent extends PureComponent<Props, State> {
  readonly state = {
    data: initializeData(this.props.fields)
  };

  onSubmit = (): void => {
    this.props.onSubmit(this.state.data);
  };

  onChange = (value: any, name: any): void => {
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

  renderFields = () => {
    const { fields = [] } = this.props;

    if (!fields.length) {
      return 'No fields';
    }

    return fields.map(({ component, items, name, title, type }, index) => {
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
              key={`${name}-${index}`}
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
            <Button color="blue" key={`button-${index}`} type={type} onClick={this.onSubmit}>
              {component}
            </Button>
          );
        default:
          return (
            <Input
              key={`${name}-${index}`}
              name={name}
              title={title}
              type={type}
              value={this.state.data[name]}
              width="100%"
              onChange={this.onChange}
            />
          );
      }
    });
  };

  public render() {
    const { className, fieldClass, title = '', titleClass, vertical = true, width } = this.props;

    return (
      <div className={className}>
        {title && <Title className={titleClass}>{title}</Title>}
        <FieldWrapper className={fieldClass} vertical={vertical} width={width}>
          {this.renderFields()}
        </FieldWrapper>
      </div>
    );
  }
}
