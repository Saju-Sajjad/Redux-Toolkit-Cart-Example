import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { removeCart } from '../Redux/feature/CartSlice';
import './Cart.css'
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carts.cart);

  const handleRemoveItem = (itemId) => {
    dispatch(removeCart(itemId));
  };

  return (
    <div className="cart-container mt-4">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {cartItems.map((item) => (
            <Col key={item.id} className="mb-4">
              <Card className="h-100 product-card">
                <div className="product-image-container">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    className="img-fluid product-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="product-title">{item.title}</Card.Title>
                    <Card.Text className="text-muted">Price: ${item.price}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-warning">
                      {[...Array(Math.floor(item.rating.rate))].map((_, index) => (
                        <i key={index} className="bi bi-star-fill"></i>
                      ))}
                      {[...Array(5 - Math.floor(item.rating.rate))].map((_, index) => (
                        <i key={index + Math.floor(item.rating.rate)} className="bi bi-star"></i>
                      ))}
                      <span className="ms-1">({item.rating.count} reviews)</span>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Cart;
