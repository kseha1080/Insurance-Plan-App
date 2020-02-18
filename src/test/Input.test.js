import React from 'react';
import { mount } from 'enzyme';

import { Input } from '../components/atoms/Input';

import { _runPropTypeCheck } from '../utils/testUtils';

const mockProps = {
  name: 'firstName',
  type: 'text',
  placeholder: 'ex. John',
  handleInput: () => {},
  value: 'David',
};

describe('Test Input component', () => {
  describe('Test input field', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Input />);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should focus on input upon componentDidMount', () => {
      const { inputRef } = wrapper.instance();
      jest.spyOn(inputRef.current, 'focus');

      wrapper.instance().componentDidMount();
      expect(inputRef.current.focus).toHaveBeenCalledTimes(1);
    });
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(Input, mockProps);
  });
});
