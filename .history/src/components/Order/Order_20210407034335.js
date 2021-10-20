import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import delivery from "../../assets/Image/Group 1151.png";
import noOrder from '../../assets/Image/no-order.png';


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
      {order.length !== 0 ? (
        <div>
          <Alert variant="danger">You Have No Order</Alert>
          <Row>
            <Col md={6}>
              <img src={noOrder} alt="" />
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          <Alert variant="success">You Have Order {order.length} Item!</Alert>
          <Row className="justify-content-center">
            {order.map((item) => (
              <Col key={item._id} xs={12} sm={3} className="pb-4">
                <Card className="d-flex">
                  <img src={item.picture} alt="" />
                  <Card.Body>
                    <Card.Title>{item.foodName}</Card.Title>
                    <Card.Text>quantity: ${item.quantity}</Card.Text>
                    <Card.Text>Total: ${item.totalPrice}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-5 mb-5">
            <Col>
              <Card className="row flex-row justify-content-around">
                <div className="col-md-4">
                  <img className="img-fluid" src={delivery} alt="" />
                </div>
                <div className="col-md-4 col-sm-12  align-self-center">
                  <h5>Your Location</h5>
                  <p>Address: {order[0]?.address}</p>
                  <p>Date: {order[0]?.date}</p>
                  <p>Phone: {order[0]?.phone}</p>
                </div>
                <div className="col-md-4 col-sm-12 align-self-center text-sm-left text-md-center">
                  <button className="btn btn-danger w-50">Contact Us</button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default Order;
