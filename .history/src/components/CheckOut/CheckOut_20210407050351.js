import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { UserContext } from "../../App";
import Order from "../../onion-restaurent/Image/confirmOrder.png";
import "./CheckOut.css";
import CheckOutFrom from "./CheckOutForm/CheckOutFrom";
import Map from "./Map/Map";

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cart, setCart] = useState({});
  const { count, foodId } = loggedInUser;
  useEffect(() => {
    axios
      .get(`https://red-onion-server-121.herokuapp.com/foodDetails/${foodId}`)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  }, [foodId]);

  const { name: foodName, picture, price } = cart;

  const [deliverInfo, setDeliverInfo] = useState({});
  const [map, setMap] = useState(true);

  const { name, address, phone } = deliverInfo;

  const fixNumber = (str, num) => {
    const price = Number(str);
    const multiplication = price * num;
    return multiplication.toFixed(2);
  };
  const subTotal = fixNumber(price, count);
  const vat = fixNumber(subTotal, 0.07);

  let deliveryFee;

  if (subTotal < 50) {
    deliveryFee = 3.5;
  } else if (subTotal > 50) {
    deliveryFee = 2.5;
  }
  const total = (Number(subTotal) + Number(vat) + deliveryFee).toFixed(2);

   const [confirmOrder, setConfirmOrder] = useState(false);
  const handleOrder = () => {
    const orderFood = { ...deliverInfo , date : new Date() };
    orderFood.totalPrice = total;
    orderFood.quantity = count;
    orderFood.picture = picture;
    orderFood.foodName = foodName;
    console.log(orderFood);
    axios
      .post("https://red-onion-server-121.herokuapp.com/order", orderFood)
      .then((res) => setConfirmOrder(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      {confirmOrder ? (
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-7">
            <Alert variant="success">Your Order Place Successfully! </Alert>
            <img className='img-fluid' src={Order} alt="confirm" />
          </div>
        </div>
      ) : (
        <div className="row mt-5 justify-content-between mb-5">
          <div className="col-md-7 col-sm-12 mb-4">
            {!map ? (
              <Map />
            ) : (
              <CheckOutFrom deliverInfo={setDeliverInfo} map={setMap} />
            )}
          </div>
          <div className="col-md-4 col-sm-12 ">
            <div className="delivery-info">
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Address:</strong> {address}
              </p>
              <p>
                <strong>Phone:</strong> {phone}
              </p>
            </div>
            <div className="card">
              <div className="d-flex justify-content-between">
                <img
                  style={{ width: "100px", objectFit: "contain" }}
                  src={picture}
                  alt=""
                />
                <div style={{ padding: "1.25rem" }}>
                  <h6>{foodName}</h6>
                  <p>price: ${price}</p>
                  <p>quantity: {count}</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p>
                subtotal item <span>${subTotal}</span>
              </p>
              <p>Tax ${vat}</p>
              <p>Delivery fee ${deliveryFee}</p>
              <p>Total ${total}</p>
              <button
                onClick={handleOrder}
                disabled={map}
                className="btn btn-danger w-100"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
