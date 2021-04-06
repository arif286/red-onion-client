import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Order = () => {
    return (
      <Container>
        <h1>place Order successfully!</h1>
        <Row >
          <Col md={6}>
            <Card></Card>
          </Col>
        </Row>
      </Container>
    );
};

export default Order;