import { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers } from '../actions/userActions';

const UserListScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector(state => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Users</h1>
    </>
  );
};

export default UserListScreen;
