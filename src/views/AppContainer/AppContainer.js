import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LoadComponent } from '../../components/atoms/LoadComponent';
import { Notification } from '../../components/atoms/Notification';

export class AppContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { notification: null };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error && this.props.error) {
      this.setState({
        notification: (
          <Notification
            message={this.props.error}
            onClose={this._onCloseNotification}
          />
        ),
      });
    }
    if (prevProps.error !== this.props.error && !this.props.error) {
      this.setState({
        notification: null,
      });
    }
  }

  _onCloseNotification = () => {
    this.setState({ notification: null });
  };

  render() {
    const { children, formLoading, recommendationsLoading } = this.props;
    const { notification } = this.state;
    const isLoading = formLoading || recommendationsLoading;

    return (
      <>
        {isLoading && <LoadComponent />}
        {notification}
        <div className='page-container'>{children}</div>
      </>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
  formLoading: PropTypes.bool,
  recommendationsLoading: PropTypes.bool,
  error: PropTypes.string,
};
