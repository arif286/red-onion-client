import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import delivery from "../../assets/Image/Group 1151.png";


const Order = () => {
  const [order, setOrder] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    axios.get(`http://localhost:5000/orderDetails?email=${loggedInUser.email}`)
      .then(res => {
        console.log(res.data)
        setOrder(res.data)
      })
      .catch(err => console.log(err));
  }, [loggedInUser.email]);
  const {address, date, foodName, picture, name, totalPrice} = order;
  return (
    <Container>
      <Alert variant="success">You Have Order {order.length} Item!</Alert>
      <Row className="justify-content-between">
        {order.map((item) => (
          <Col xs={12} md={3}>
            <Card className="d-flex">
              <img src={item.picture} alt="" />
              <Card.Body>
                <Card.Title>{item.foodName}</Card.Title>
                <Card.Text>quantity: ${item.quantity}</Card.Text>
                <Card.Text>Total Price: ${item.totalPrice}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className='mt-5'>
        <Col xs={6}>
          <Card>
            <img src={delivery} alt="" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
