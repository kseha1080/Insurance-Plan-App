import React from 'react';
import { shallow } from 'enzyme';

import { InsuranceForm } from '../views/InsuranceForm';

import {
  _findByAttribute,
  _runPropTypeCheck,
  _createStore,
} from '../utils/testUtils';

const initialState = {
  insuranceForm: { formStep: 0 },
};

const setup = (initialState = {}) => {
  const store = _createStore(initialState);
  const wrapper = shallow(<InsuranceForm store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('Test InsuranceForm component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup(initialState);
  });

  it('should render HelmetWrapper', () => {
    const helmetWrapper = wrapper.find('HelmetWrapper');
    expect(helmetWrapper.length).toBe(1);
  });

  it('should render document title as Insurance Form', () => {
    const titleElement = wrapper.find('title');
    expect(titleElement.text()).toBe('Insurance Form');
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(InsuranceForm, initialState);
  });
});
