import React from 'react';
import { shallow } from 'enzyme';

import { Notification } from '../components/atoms/Notification';

import { _findByAttribute, _runPropTypeCheck } from '../utils/testUtils';

const mockProps = {
  message: 'Not a valid email.',
  onClose: () => {},
};

describe('Test Notification component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notification {...mockProps} />);
  });

  it('should render successfully', () => {
    const notificationComponent = _findByAttribute(wrapper, 'component-notification');
    expect(notificationComponent.length).toBe(1);
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(Notification, mockProps);
  });
});
