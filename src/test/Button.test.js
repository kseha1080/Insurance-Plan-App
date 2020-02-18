import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../components/atoms/Button';

import { _findByAttribute, _runPropTypeCheck } from '../utils/testUtils';

const mockProps = {
  buttonText: 'Next',
  disabled: true,
  handleClick: () => {},
};

describe('Test Button component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button {...mockProps} />);
  });

  it('should render successfully', () => {
    const buttonComponent = _findByAttribute(wrapper, 'component-button');
    expect(buttonComponent.length).toBe(1);
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(Button, mockProps);
  });
});
