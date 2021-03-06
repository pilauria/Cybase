import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Message from '../components/Message';

const CartScreen = ({ match, location, history }) => {
  // console.log(
  //   'match:',
  //   match.params.id,
  //   'location:',
  //   location,
  //   'history:',
  //   history
  // ); // from the URL
  const productId = match.params.id;

  // console.log(qty); ==> ?qty=1 ==> take just the number out of qty
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping'); // isLogged in?=> shipping / isNotLoggedIn => login
  };

  return (
    <Row>
      <Col md={8} className='text-center'>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product}>
                {/* variables coming from cartAction.jsx */}
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>€ {item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={e =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button '
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                      className='button-cust'
                    >
                      <i className='fas fa-trash '></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2 className='text-center'>
                Subtotal n.{cartItems.reduce((acc, item) => acc + item.qty, 0)}
                &nbsp;items
              </h2>
              <h5 className='text-center my-3 text-black '>
                €
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className='text-center'>
              <Button
                type='button'
                className='btn-block button-cust'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </Button>
            </ListGroup.Item>
            <Link to='/' className='text-center'>
              <Button
                type='button'
                className='btn-block button-cust'
                onClick={checkoutHandler}
              >
                Continue Shopping
              </Button>
            </Link>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;

// when we come to the cart screen, if we have an id (productId), a qty and the URL (dispatch), those are gonna added to the cart
