import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../components/atoms/Header';

import { _findByAttribute, _runPropTypeCheck } from '../utils/testUtils';

const mockProps = {
  headerText: 'We got your recommendation',
  subHeaderText:
    'Based on your answers, these are what you should be paying for each category',
};

describe('Test Header component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render successfully', () => {
    const headerComponent = _findByAttribute(wrapper, 'component-header');
    expect(headerComponent.length).toBe(1);
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(Header, mockProps);
  });
});
