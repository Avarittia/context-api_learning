import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { categories } from "../data/data";

const StoreFooter = () => {
  return (
    <div className="p-5">
      <h1 className="text-center fs-3 text-primary">Best Menu Items that is Available</h1>

      <Container fluid>
        <Row className="g-5">
          {categories.map((item, index) => (
            <Col
              key={index}
              className="d-flex flex-column align-items-center"
            >
              
              <img src={item.image} alt={item.name} className="w-20" />
              <h2 className="fs-5 text-center text-primary">{item.name}</h2>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StoreFooter;
