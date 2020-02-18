import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ buttonText, disabled, handleClick }) => {
  return (
    <button
      className='button'
      onClick={handleClick}
      disabled={disabled}
      type='submit'
      aria-label={buttonText}
      test-id='component-button'
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};
