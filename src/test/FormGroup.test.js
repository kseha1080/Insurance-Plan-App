import React from 'react';
import { mount } from 'enzyme';

import { FormGroup } from '../components/molecules/FormGroup';

import {
  _findByAttribute,
  _runPropTypeCheck,
  _createStore,
} from '../utils/testUtils';

const initialState = {
  insuranceForm: {
    formStep: 0,
    formData: {
      firstName: 'John',
      address: '185 Broad Street New York, New York 11004',
      occupation: 'EMPLOYED',
      hasChildren: false,
      numberOfChildren: 0,
      email: 'johndoe@gmail.com',
    },
    setFormData: () => {},
    formName: 'occupation',
    header: "What's your occupation?",
    inputType: 'radio',
    placeholder: '',
    canBeSubmitted: false,
    setCurrentFormStep: () => {},
    createUser: () => {},
  },
};

const setup = (initialState = {}) => {
  const store = _createStore(initialState);
  const wrapper = mount(<FormGroup store={store} />);
  return wrapper;
};

describe('Test FormGroup component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup(initialState);
  });

  it('should render without crashing', () => {
    const formGroupComponent = _findByAttribute(
      wrapper,
      'component-form-group',
    );
    expect(formGroupComponent.length).toBe(1);
  });

  it('should render header', () => {
    const headerComponent = wrapper.find('header');
    expect(headerComponent.length).toBe(1);
  });

  it('should render input', () => {
    const inputComponent = wrapper.find('input');
    expect(inputComponent.length).toBe(1);
  });

  it('should render button', () => {
    const buttonComponent = wrapper.find('button');
    expect(buttonComponent.length).toBe(1);
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(FormGroup, initialState);
  });
});
