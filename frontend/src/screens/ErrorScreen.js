import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ErrorScreen = () => (
  <div>
    <h1 className='my-5'> This page does not exist!</h1>
    <LinkContainer to={`/`}>
      <Button variant='light' className='btn-sm button-cust text-white'>
        Home
      </Button>
    </LinkContainer>
  </div>
);

export default ErrorScreen;
