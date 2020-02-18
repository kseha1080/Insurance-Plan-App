import React from 'react';
import { shallow } from 'enzyme';

import { LoadComponent } from '../components/atoms/LoadComponent';

import { _findByAttribute } from '../utils/testUtils';

it('should render successfully', () => {
  const wrapper = shallow(<LoadComponent />);
  const loader = _findByAttribute(wrapper, 'component-load-component');
  expect(loader.length).toBe(1);
});
