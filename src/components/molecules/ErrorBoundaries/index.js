import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundaries extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err) {
    this.setState({ hasError: err });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <h1 test-id='component-error-boundaries'>
          An error occurred: <span>{hasError.message}</span>
        </h1>
      );
    }

    return children;
  }
}

ErrorBoundaries.propTypes = {
  children: PropTypes.node,
};
