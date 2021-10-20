import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
// import delivery from "../../assets/Image/Group 1151.png";
import confirmOrder from '../../assets/Image/confirmOrder.png';

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
      <h1>place Order successfully!</h1>
      <Row className='justify-content-center'>
        <Col md={6}>
          <Card>
            <img src={confirmOrder} alt="" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
