import React from 'react';
import { shallow, mount } from 'enzyme';

import { ListCard } from '../components/atoms/ListCard';

import { _findByAttribute, _runPropTypeCheck } from '../utils/testUtils';

const mockProps = {
  title: 'Health Insurance',
  content: '€130.42 per month',
};

describe('Test ListCard component', () => {
  it('should render successfully', () => {
    const wrapper = shallow(<ListCard {...mockProps} />);
    const listCardComponent = _findByAttribute(wrapper, 'component-list-card');
    expect(listCardComponent.length).toBe(1);
  });

  it('should render child components ', () => {
    const wrapper = mount(<ListCard {...mockProps} />);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(ListCard, mockProps);
  });
});
