import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import shoesData from "../../constant/shoes.json"; // Assuming you have a separate data file for shoes
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Redux/feature/CartSlice";

const Shoes = ({ filter }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carts.cart);

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Filter shoes based on the input filter
  const filteredShoes = shoesData.filter((shoe) => {
    return shoe.model.toLowerCase().includes(filter.toLowerCase());
  });

  const handleAddCart = (shoe) => {
    dispatch(addCart(shoe));
  };

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {filteredShoes.map((shoe) => (
        <Col key={shoe.id} className="mb-4">
          <Card className="h-100 product-card">
            <div className="product-image-container">
              <Card.Img
                variant="top"
                src={shoe.image}
                alt={shoe.model}
                className="img-fluid product-image"
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="product-title">{shoe.model}</Card.Title>
                <Card.Text className="text-muted">
                  Price: ${shoe.price}
                </Card.Text>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-warning">
                  {[...Array(Math.floor(shoe.rating.rate))].map((_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                  ))}
                  {[...Array(5 - Math.floor(shoe.rating.rate))].map(
                    (_, index) => (
                      <i
                        key={index + Math.floor(shoe.rating.rate)}
                        className="bi bi-star"
                      ></i>
                    )
                  )}
                  <span className="ms-1">({shoe.rating.count} reviews)</span>
                </div>
                {!isProductInCart(shoe.id) && (
                  <Button
                    variant="primary"
                    className="add-to-cart-button"
                    onClick={() => handleAddCart(shoe)}
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

Shoes.propTypes = {
  filter: PropTypes.string,
};

export default Shoes;
