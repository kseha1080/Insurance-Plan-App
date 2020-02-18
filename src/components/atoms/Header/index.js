import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ headerText, subHeaderText }) => {
  const renderSubHeader = subHeaderText ? <h4>{subHeaderText}</h4> : null;

  return (
    <header className='header-wrapper' test-id='component-header'>
      <h1>{headerText}</h1>
      {renderSubHeader}
    </header>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
  subHeaderText: PropTypes.string,
};
