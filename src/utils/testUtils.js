import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import checkPropTypes from 'check-prop-types';

/**
 * Test utility function that takes in wrapper and attribute arguments and returns a shallow wrapper
 * with the provided attribute of 'test-id'
 * @function _findByAttribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} attribute - test-id attribute to find component with
 * @returns {ShallowWrapper}
 */

export const _findByAttribute = (wrapper, attribute) => {
  return wrapper.find(`[test-id='${attribute}']`);
};

/**
 * Test utility function that takes in component and expected props then returns an assertion for correct
 * data types for provided component's props
 * @function _runPropTypeCheck
 * @param {JSX} component
 * @param {object} mockProps
 */

export const _runPropTypeCheck = (component, mockProps) => {
  const propTypeCheck = checkPropTypes(
    component.propTypes,
    mockProps,
    'prop',
    component.name,
  );
  expect(propTypeCheck).toBeUndefined();
};

/** Test utility function that returns a mock store with provided initial state store
 * @function _createStore
 * @param {object} initialStore - initial store that is created for mock purposes
 * @returns {Store} - Redux store
 */

export const _createStore = (initialState) => {
  const thunkStore = configureStore([thunk]);
  const store = thunkStore(initialState);
  return store;
};
