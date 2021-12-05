import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { ListGroupItem } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductScreen = ({ match }) => {
  // https://v5.reactrouter.com/web/api/match
  // :id is from the one created in App.js => <Route path='/product/:id' component={ProductScreen} />

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };
    fetchProduct();
  });

  const [product, setProduct] = useState({});

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className='d-flex justify-content-center'>
              <Button
                className='btn-block'
                type='button'
                disabled={product.countInStock === 0}
              >
                ADD TO CART
              </Button>
            </ListGroupItem>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
