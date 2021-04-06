import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import delivery from "../../onion-restaurent/Image/Group 1151.png";


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
  return (
    <Container>
      <Row className="justify-content-center">
        <Alert variant="success">You Have Order Item!</Alert>
        <Col xs={6}>
          <Card>
            <img src={delivery} alt="" />
          </Card>
        </Col>
        <Col xs={6}>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
