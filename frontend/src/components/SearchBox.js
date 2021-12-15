import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className='d-flex '>
      <Form.Control
        type='text'
        name='q'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Search Products...'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-primary'
        className='p-2 my-2 mx-2 button-cust'
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
