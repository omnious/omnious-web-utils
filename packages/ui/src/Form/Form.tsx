// Global import
import { styled } from 'linaria/react';
import * as React from 'react';
import { PureComponent, FormHTMLAttributes } from 'react';

// Local import
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Input } from '../Input';

interface FieldItem {
  name: string;
  title: string;
}

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  // disabled?: boolean;
  // fieldClass?: string;
  // fields?: FieldItem[];
  // titleClass?: string;
  vertical: boolean;
  // width?: string;
  // onSubmit: (data: any) => void;
}

interface FormState {
  data: any;
}

function initializeData(fields = []) {
  return fields.slice(0, -1).reduce(
    (result, { name, value }) => ({
      ...result,
      [name]: value || ''
    }),
    {}
  );
}

const FormWrapper = styled.div``;

const Title = styled.h4`
  margin-bottom: 0.5rem;
`;

const StyledForm = styled.form`
  align-items: ${({ vertical }) => (vertical ? `stretch` : 'flex-end')};
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? `column` : 'row')};
  width: ${({ width }) => width || '100%'};

  & > button {
    margin-top: 15px;
  }

  & > label:not(:first-of-type) {
    margin-top: 15px;
  }
`;

export class Form extends PureComponent<FormProps, FormState> {
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

  private renderFields = () => {
    const { fields = [] } = this.props;

    if (!fields.length) {
      return 'No fields';
    }

    return fields.map(({ component, disabled, items, name, title, type }, index) => {
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
              disabled={disabled}
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
    const { title = '', vertical = true, width } = this.props;

    return (
      <FormWrapper>
        {title && <Title>{title}</Title>}
        <StyledForm vertical={vertical} width={width}>
          {this.renderFields()}
        </StyledForm>
      </FormWrapper>
    );
  }
}
