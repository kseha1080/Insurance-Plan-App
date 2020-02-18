import React from 'react';
import { shallow } from 'enzyme';

import { AppContainer } from '../views/AppContainer';

import {
  _findByAttribute,
  _runPropTypeCheck,
  _createStore,
} from '../utils/testUtils';

const initialState = {
  insuranceForm: {
    formLoading: true,
  },
  recommendations: {
    recommendationsList: false,
  },
  error: {
    errorMsg: '',
  },
};

const setup = (initialState = {}) => {
  const store = _createStore(initialState);
  const wrapper = shallow(<AppContainer store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('Test AppContainer component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup(initialState);
  });

  it('should render without crashing', () => {
    const AppContainerComponent = wrapper.find('.page-container');
    expect(AppContainerComponent.length).toBe(1);
  });

  it('should have notification state equal to null', () => {
    const notificationState = wrapper.state().notification;
    expect(notificationState).toBe(null);
  });

  it('should not render loader if loading props are both false', () => {
    const loaderComponent = wrapper.find('.load-component-container').length;
    expect(loaderComponent.length).toBeUndefined();
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(AppContainer, initialState);
  });
});
