import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import mockData from '../../mockData/MOCK_DATA.json';
import './CheckOut.css';
import Map from './Map/Map';

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cart, setCart] = useState(mockData);
  console.log(loggedInUser);
  const { count, foodId } = loggedInUser;
  const cartFoodItem = cart.find(food =>
    food.id === foodId)
  const { name: foodName, picture, price } = cartFoodItem;


  const defaultValues = {
    TextField: "",
  };
  const { register, handleSubmit, errors, control } = useForm({ defaultValues });

  const [deliverInfo, setDeliverInfo] = useState({});
  const [map, setMap] = useState(false);
  const onSubmit = (data) => {
      console.log(data)
        setDeliverInfo(data);
  }
  const { name, address, phone, email } = deliverInfo;

  let history = useHistory();
  const handleOrder = () => {
    history.push("/order");
  }

    return (
      <div className="container">
        <div className="row mt-5 justify-content-between">
          <div className="col-md-7 col-sm-12">
            {map ? (
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
                    name="textarea"
                    placeholder="delivery instruction"
                    required={true}
                    control={control}
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
              <div className="row d-flex justify-content-between">
                <div className='col'>
                  <img style={{ width: "100%," }} src={picture} alt="" />
                </div>
                <div className="col card-body">
                  <h6>{foodName}</h6>
                  <p>price: ${price}</p>
                  <p>quantity{count}</p>
                </div>
              </div>
            </div>
            <div className="">
              <p>subtotal item</p>
              <p>Tax</p>
              <p>Delivery fee</p>
              <p>Total</p>
              <button onClick={handleOrder} className="btn btn-danger">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CheckOut;