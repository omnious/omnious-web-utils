// Global import
import React, { Component } from 'react';

// Local import
import { COLORS, Dropdown, Input, Radio, Select, Form } from '../../../src';
import { StyledStory } from '../SharedStyles';

/**
 * @description Dropdown story
 *
 * @param {*} options
 * @returns {JSX.Element}
 */
export class DropdownStory extends Component {
  state = { dropdownValue: 1, radioValue: 1 };

  handleDropdown = (name, value) => {
    console.log('enter dropdown!', value);
    this.setState(state => ({ ...state, dropdownValue: value }));
  };

  handleRadio = (name, value) => {
    console.log('enter radio!', value);
    this.setState(state => ({ ...state, radioValue: Number(value) }));
  };

  handleForm = form => {
    console.log(form);
  };

  render() {
    const { dropdownValue, radioValue } = this.state;
    const { options } = this.props;
    const radioItems = [
      { label: 'male', value: 1 },
      { label: 'female', value: 2 },
      { label: 'unisex', value: 3 }
    ];
    const formItems = [
      { label: 'username', name: 'email' },
      { label: 'password', type: 'password', name: 'password' },
      { label: 'age', type: 'number', name: 'age' },
      { type: 'select', items: radioItems, name: 'gd', title: 'gender select' },
      { type: 'radio', items: radioItems, name: 'gender', title: 'gender radio' },
      { component: 'submit', type: 'submit', color: 'primary' }
    ];

    return (
      <StyledStory>
        <div style={{ display: 'flex' }}>
          <Dropdown
            isClearable
            items={radioItems}
            name="dd"
            title="hello world"
            selected={dropdownValue}
            handleDropdown={this.handleDropdown}
          />
          <Radio
            items={radioItems}
            name="rr"
            title="hello world"
            selected={radioValue}
            handleRadio={this.handleRadio}
          />
          <Form items={formItems} handleForm={this.handleForm} />
        </div>
      </StyledStory>
    );
  }
}
