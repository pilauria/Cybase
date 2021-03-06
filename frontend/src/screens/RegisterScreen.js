import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  //location.search returns the querystring part of a URL.The querystring part is the part of the URL after the question mark (?)
  // if the URL querystring exist we take the part to the right of the equal sign, otherwise we take just the /
  const redirect = location.search ? location.search.split('=')[1] : '/';

  //redirect if we are already logged in, I don't want to be able to come into the login if we are already logged inscreen
  // (If you log in successfully, you want to be redirected to the home page instead of staying on the login page, which is what the history.push does)
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={e => setName(e.target.value)}
            className='mb-3'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='mb-3'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='mb-3'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className='mb-3'
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3 button-cust'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;

//form valitadion
//  const submitHandler = e => {
//    e.preventDefault();
//    const validEmail = value =>
//      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
//    const validPassword = new RegExp(
//      '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
//    );
//    try {
//      if (!validEmail) {
//        throw new Error('Please enter a valid email address');
//      } else if (password !== confirmPassword) {
//        setMessage('Passwords do not match');
//      } else if (!validPassword) {
//        throw new Error(
//          'Password should be at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
//        );
//      } else {
//        dispatch(register(name, email, password));
//      }
//    } catch (err) {
//      setMessage(err.message);
//    }
//  };
