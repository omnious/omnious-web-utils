// Global import
import { shallow } from 'enzyme';
import * as React from 'react';

// Local import
import { Button } from '../../src';

describe('<Button />', () => {
  it('Should contain children of type string', () => {
    const wrapper: any = shallow(<Button>This is button text</Button>);
    expect(wrapper.contains('This is button text')).toBe(true);
  });

  it('Should contain children of type ReactChildren', () => {
    const wrapper: any = shallow(
      <Button>
        <span>This is button element</span>
      </Button>
    );
    expect(wrapper.find('span').type()).toBe('span');
  });
});
