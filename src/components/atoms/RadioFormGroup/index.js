import React from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export const RadioFormGroup = ({ name, handleChange, options, value }) => {
  const renderRadioOptions = options.map((option) => {
    return (
      <FormControlLabel
        key={option.value}
        value={option.value}
        control={<Radio color='primary' />}
        label={option.label}
        name={name}
        aria-label={option.value}
      />
    );
  });

  return (
    <FormControl component='fieldset' margin='dense'>
      <RadioGroup
        aria-label={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {renderRadioOptions}
      </RadioGroup>
    </FormControl>
  );
};

RadioFormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};
