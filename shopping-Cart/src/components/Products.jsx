
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types'; 
import Col from 'react-bootstrap/Col';
import products from '../constant/data.json';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../Redux/feature/CartSlice';

const Products = ({ filter }) => {
  console.log("pro",addCart)
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carts.cart);

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddCart = (product) => {
    dispatch(addCart(product));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {filteredProducts.map((product) => (
        <Col key={product.id} className="mb-4">
          <Card className="h-100 product-card">
            <div className="product-image-container">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="img-fluid product-image"
                style={{ height: '200px', objectFit: 'cover' }}
              />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="product-title">{product.title}</Card.Title>
                <Card.Text className="text-muted">Price: ${product.price}</Card.Text>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-warning">
                  {[...Array(Math.floor(product.rating.rate))].map((_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                  ))}
                  {[...Array(5 - Math.floor(product.rating.rate))].map((_, index) => (
                    <i key={index + Math.floor(product.rating.rate)} className="bi bi-star"></i>
                  ))}
                  <span className="ms-1">({product.rating.count} reviews)</span>
                </div>
                {!isProductInCart(product.id) && (
                  <Button
                    variant="primary"
                    className="add-to-cart-button"
                    onClick={() => handleAddCart(product)}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
Products.propTypes = {
  filter: PropTypes.string, // Assuming filter is a string, adjust if necessary
};

export default Products;
