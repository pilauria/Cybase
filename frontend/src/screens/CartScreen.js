import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

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

  return <div>Cart</div>;
};

export default CartScreen;

// when we come to the cart screen, if we have an id (productId), a qty and the URL (dispatch), those are gonna added to the cart
