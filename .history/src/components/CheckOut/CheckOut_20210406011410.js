import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css';
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

  console.log(loggedInUser);
  const { name: foodName, picture, price } = cart;


  const defaultValues = {
    TextField: "",
  };
  const { register, handleSubmit, errors } = useForm({ defaultValues });

  const [deliverInfo, setDeliverInfo] = useState({});
  const [map, setMap] = useState(true);

  const onSubmit = (data,e) => {
    console.log(data)
    e.target.reset();
    setDeliverInfo(data);
    setMap(false)
  }
  const { name, address, phone, email } = deliverInfo;

  let history = useHistory();
  const handleOrder = () => {
    history.push("/order");
  };

  const fixNumber = (str,num) => {
    const price = Number(str);
    const multiplication = price * num
    return (multiplication).toFixed(2)
  };
  const subTotal = fixNumber(price,count);
  console.log(subTotal)
  const vat = fixNumber(subTotal, 0.07);
  console.log(vat)
  // let total = 0;
  // if (condition) {

  // }

    return (
      <div className="container">
        <div className="row mt-5 justify-content-between">
          <div className="col-md-7 col-sm-12">
            {!map ? (
              <Map />
            ) : (
              <div>
                <h3>Delivery Details</h3>
                <form
                  className="delivery-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    ref={register({
                      validate: (value) => value.length !== "",
                      required: true,
                    })}
                  />
                  {errors.name && <p>please write your name</p>}

                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    ref={register({
                      validate: (value) => value.length !== "",
                      required: true,
                    })}
                  />
                  {errors.address && <p>please write correct address</p>}
                  <input
                    type="phone"
                    name="phone"
                    placeholder="phone"
                    defaultValue="+880"
                    ref={register({
                      validate: (value) => value.length !== 14,
                      required: true,
                    })}
                  />
                  {errors.phone && <p>please type a correct number</p>}
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    ref={register({
                      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      required: true,
                    })}
                  />
                  {errors.email && <p>Invalid Email</p>}
                  <textarea
                    type="text"
                    name="instruction"
                    placeholder="delivery instruction"
                    required={true}
                  />
                  <input type="submit" value="Save & Continue" />
                </form>
              </div>
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
                subtotal item <span>{subTotal}</span>
              </p>
              <p>Tax</p>
              <p>Delivery fee</p>
              <p>Total</p>
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