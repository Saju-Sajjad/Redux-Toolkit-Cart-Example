// Navigation.js

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import a custom CSS file for Navbar styling

function Navigation() {
  const cartItems = useSelector((state) => state.carts.cart);

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand to="/" as={Link} className="brand-logo">
          <FontAwesomeIcon icon={faShoppingBag} style={{ color: 'white' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto">
            <Nav.Link to="/" as={Link} className="nav-link" style={{ color: 'white' }}>
              Products
            </Nav.Link>
            
            <Nav.Link to="/shoes" as={Link} className="nav-link" style={{ color: 'white' }}>
              Shoes
            </Nav.Link>
          </Nav>
          <Nav.Link to="/cart" as={Link} className="ms-auto cart-link">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItems.length})
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
