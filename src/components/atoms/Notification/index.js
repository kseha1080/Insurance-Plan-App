import React from 'react';
import PropTypes from 'prop-types';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const Notification = ({ message, onClose }) => {
  return (
    <div className='notification' test-id='component-notification'>
      <p>{message}</p>
      <button className='notification__button' onClick={onClose}>
        <HighlightOffIcon />
      </button>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
