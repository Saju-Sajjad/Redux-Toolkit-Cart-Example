// Dashboard.js
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Dashboard.css"; // Import the CSS file
import Footer from "../Footer";
import Shoes from "./Shoes";

const ShoesDashboard = () => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <Container className="dashboard-container">
      <h1 className="dashboard-header">Shoes Dashboard</h1>

      <div className="filter-container">
        <input
          type="text"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
          placeholder="Enter filter..."
          className="form-control filter-input"
        />
        <Button
          variant="danger"
          onClick={() => handleFilterChange("")}
          className="clear-filter-button"
        >
          Clear Filter
        </Button>
      </div>

      <Row xs={12} md={12} lg={12} className="g-4">
        <Col>
          <div className="bg-light p-3 mb-4 rounded">
            <h4>Statistics</h4>
            {/* Add your statistics or charts here */}
          </div>
        </Col>
        <Col xs={12}>
          <Shoes filter={filter} />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ShoesDashboard;
