import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import delivery from '../../assets/Image/Group 1151.png';
const Order = () => {
    return (
      <Container>
        <h1>place Order successfully!</h1>
        <Row >
          <Col md={6}>
                    <Card>
                        <img src={delivery} alt=''/>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default Order;