import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

export class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { name, type, handleInput, placeholder, value } = this.props;

    return (
      <input
        className='input-field'
        aria-label={name}
        type={type}
        name={name}
        onChange={handleInput}
        placeholder={placeholder}
        value={value}
        test-id='component-input'
        ref={this.inputRef}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  handleInput: PropTypes.func,
  value: PropTypes.string,
};
