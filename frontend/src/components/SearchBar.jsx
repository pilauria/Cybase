import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ history }) => {
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
    <Form inline onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='search'
        name='q'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-primary'
        className='p-2 my-0 mx-1  outline-primary'
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
