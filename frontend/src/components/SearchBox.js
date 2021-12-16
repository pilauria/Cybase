import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${encodeURIComponent(keyword)}`); // can search symbols and other characters as well
      // setKeyword(''); clear serachbox
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className='d-flex '>
      <i className='fas fa-search lens fa-lg'></i>
      <Form.Control
        type='search'
        name='search'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Search Products...'
      ></Form.Control>
      <Button type='submit' variant='outline-light' className='p-2 my-0 mx-2 '>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
