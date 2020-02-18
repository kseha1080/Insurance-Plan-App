import React from 'react';
import Loader from 'react-loader-spinner';

export const LoadComponent = () => {
  return (
    <div
      className='load-component-container'
      test-id='component-load-component'
    >
      <Loader type='TailSpin' color='green' height={80} width={80} />
    </div>
  );
};
