import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import delivery from "../../onion-restaurent/Image/Group 1151.png";
const Order = () => {
  const [order, setOrder] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser)

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
      <h1>place Order successfully!</h1>
      <Row>
        <Col md={6}>
          <Card>
            <img src={delivery} alt="" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
