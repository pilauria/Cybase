import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div>
      <Spinner
        animation='border'
        variant='info'
        role='status'
        style={{
          width: '110px',
          height: '110px',
          margin: 'auto',
          display: 'block',
        }}
      >
        <span class='sr-only'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
