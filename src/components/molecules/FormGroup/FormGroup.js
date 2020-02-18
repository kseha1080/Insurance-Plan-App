import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../atoms/Header';
import { Input } from '../../atoms/Input';
import { RadioFormGroup } from '../../atoms/RadioFormGroup';
import { Button } from '../../atoms/Button';

import { _parseStorageValue } from '../../../utils/utilFunctions';

export const FormGroup = ({
  setFormData,
  formName,
  header,
  inputType,
  placeholder,
  options,
  canBeSubmitted,
  formData,
  formStep,
  setCurrentFormStep,
  createUser,
  history,
}) => {
  // Parse data of current form coming from persisted storage to ensure booleans are not strings
  // _parseStorageValue is an imported function from utils
  const parsedFormValue = _parseStorageValue(formData[formName]);

  // Set user input to the form data redux state
  const _setFormData = (e) => {
    e.preventDefault();
    const newFormData = { ...formData };
    // formName variable defines which form the value belongs to
    newFormData[formName] = e.target.value;
    setFormData(newFormData);
  };

  const _onNextFormStep = (e) => {
    e.preventDefault();
    let newFormStep = formStep;

    // Check if form should render number of children or email form
    if (formName === 'hasChildren' && !parsedFormValue) {
      newFormStep += 2;
    } else {
      newFormStep++;
    }

    setCurrentFormStep(newFormStep);
  };

  const _onSubmitForm = (e) => {
    e.preventDefault();

    const {
      firstName,
      address,
      numberOfChildren,
      occupation,
      email,
    } = formData;

    const userData = {
      firstName,
      address,
      numberOfChildren: Number(numberOfChildren),
      occupation,
      email,
    };

    // Send user data to create user along with redirect function
    createUser(userData, history.push);
  };

  const renderInputField =
    inputType === 'radio' ? (
      <RadioFormGroup
        name={formName}
        options={options}
        handleChange={_setFormData}
        value={parsedFormValue}
      />
    ) : (
      <Input
        type={inputType}
        placeholder={placeholder}
        handleInput={_setFormData}
        name={formName}
        value={parsedFormValue}
      />
    );

  // Pass either submit or next step function
  const renderButtonFunc = canBeSubmitted ? _onSubmitForm : _onNextFormStep;

  const renderButtonText = canBeSubmitted ? 'Submit' : 'Next';

  // Get current form's value to enable / disable button (ignored when form value type is boolean)
  const isButtonDisabled =
    parsedFormValue || typeof parsedFormValue === 'boolean' ? false : true;

  return (
    <div className='form-group-container' test-id='component-form-group'>
      <Header headerText={header} />
      {renderInputField}
      <Button
        handleClick={renderButtonFunc}
        buttonText={renderButtonText}
        disabled={isButtonDisabled}
      />
    </div>
  );
};

FormGroup.propTypes = {
  setFormData: PropTypes.func.isRequired,
  formName: PropTypes.string,
  header: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  canBeSubmitted: PropTypes.bool,
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    address: PropTypes.string,
    occupation: PropTypes.string,
    hasChildren: PropTypes.bool,
    numberOfChildren: PropTypes.number,
    email: PropTypes.string,
  }),
  formStep: PropTypes.number.isRequired,
  setCurrentFormStep: PropTypes.func.isRequired,
  createUser: PropTypes.func,
};
