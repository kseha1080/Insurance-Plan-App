import React from 'react';
import { mount } from 'enzyme';

import { RadioFormGroup } from '../components/atoms/RadioFormGroup';

import { _runPropTypeCheck } from '../utils/testUtils';

const mockProps = {
  name: 'occupation',
  handleChange: () => {},
  options: [
    {
      label: 'Employed',
      value: 'EMPLOYED',
    },
    {
      label: 'Self Employed',
      value: 'SELF-EMPLOYED',
    },
    {
      label: 'Student',
      value: 'STUDENT',
    },
  ],
  value: 'EMPLOYED',
};

describe('Test RadioFormGroup component', () => {
  describe('Check child components', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<RadioFormGroup {...mockProps} />);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should render correct child components', () => {
      expect(wrapper.find('fieldset').length).toBe(1);
      expect(wrapper.find('label').length).toBe(mockProps.options.length);
    });
  });

  it('should have correct prop data types', () => {
    _runPropTypeCheck(RadioFormGroup, mockProps);
  });
});
