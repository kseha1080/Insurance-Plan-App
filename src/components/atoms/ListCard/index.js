import React from 'react';
import PropTypes from 'prop-types';

export const ListCard = ({ title, content }) => {
  return (
    <li className='list-card' test-id='component-list-card'>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
};

ListCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};
