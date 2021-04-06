import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css';
import CheckOutFrom from './CheckOutForm/CheckOutFrom';
import Map from './Map/Map';

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cart, setCart] = useState({});
  const { count, foodId } = loggedInUser;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/foodDetails/${foodId}`)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  }, [foodId]);

  const { name: foodName, picture, price } = cart;

  const [deliverInfo, setDeliverInfo] = useState({});
  const [map, setMap] = useState(true);

  const { name, address, phone, email } = deliverInfo;

  const fixNumber = (str,num) => {
    const price = Number(str);
    const multiplication = price * num
    return (multiplication).toFixed(2)
  };
  const subTotal = fixNumber(price,count);
  const vat = fixNumber(subTotal, 0.07);

  let deliveryFee;

  if (subTotal < 50) {
    deliveryFee = 3.5;
  }
  else if (subTotal > 50) {
    deliveryFee = 2.5;

  }
  const total = (Number(subTotal) + Number(vat) + deliveryFee).toFixed(2);

  let history = useHistory();
  const handleOrder = () => {
    history.push("/order");
    const orderFood = { ...deliverInfo };
    orderFood.totalPrice = total;
    orderFood.quantity = count;
    orderFood.foodId = foodId;
    console.log(orderFood)
    axios.post("http://localhost:5000/order", orderFood)
      .then(res => console.log(res.data))
    .catch(err=>console.log(err))
  };

    return (
      <div className="container">
        <div className="row mt-5 justify-content-between">
          <div className="col-md-7 col-sm-12">
            {!map ? <Map /> : <CheckOutFrom deliver={setDeliverInfo} map={setMap} />}
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
              <p>
                <strong>Email:</strong> {email}
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
                  <p>quantity{count}</p>
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
      </div>
    );
};

export default CheckOut;