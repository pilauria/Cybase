import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  // make the request to the backend (in this case useEffect runs as soon as the component loads)
  useEffect(() => {
    const fetchProducts = async () => {
      // we destructure res.data directly
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
