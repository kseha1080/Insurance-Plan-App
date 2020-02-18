import React from 'react';
import { shallow } from 'enzyme';

import { RecommendationsList } from '../views/RecommendationsList';

import { _runPropTypeCheck, _createStore } from '../utils/testUtils';

const initialState = {
  recommendations: {
    recommendationsList: [
      {
        type: 'PRIVATE_LIABILITY',
        price: {
          amount: 4.3,
          periodicity: 'MONTH',
        },
      },
      {
        type: 'HOME_CONTENT',
        price: {
          amount: 103.32,
          periodicity: 'YEAR',
        },
      },
      {
        type: 'HEALTH_INSURANCE',
        price: {
          amount: 320.32,
          periodicity: 'MONTH',
        },
      },
    ],
    getRecommendations: () => {},
  },
};

const setup = (initialState = {}) => {
  const store = _createStore(initialState);
  const wrapper = shallow(<RecommendationsList store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('Test RecommendationsList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup(initialState);
  });

  it('should render Helmet component', () => {
    const helmetWrapper = wrapper.find('HelmetWrapper');
    expect(helmetWrapper.length).toBe(1);
  });

  it('should render document title as Recommendations', () => {
    const helmetWrapper = wrapper.find('title');
    expect(helmetWrapper.text()).toBe('Recommendations');
  });

  it('should render list', () => {
    const listElement = wrapper.find('ul');
    const listCardComponent = wrapper.find('ListCard');
    expect(listElement.length).toBe(1);
    expect(listCardComponent.length).toBe(
      initialState.recommendations.recommendationsList.length,
    );
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(RecommendationsList, initialState);
  });
});
