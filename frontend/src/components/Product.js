import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <LinkContainer to={`/product/${product._id}`}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
        />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title as="div" style={{ cursor: 'pointer' }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </LinkContainer>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
        <Button 
          variant="primary" 
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
