import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import errorPage from '../images/errorPage.jpg';

const ErrorScreen = () => {
  return (
    <div className='text-center'>
      <img className='error-img' src={errorPage} alt='errorpage' />
      <LinkContainer to={`/`}>
        <Button variant='light' className='btn-sm button-cust text-white'>
          Home
        </Button>
      </LinkContainer>
    </div>
  );
};

export default ErrorScreen;
