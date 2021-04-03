import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Cart.css';
const Cart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { count, foodItem } = loggedInUser;

  const defaultValues = {
    TextField: "",
  };
  const { register, handleSubmit, errors, control } = useForm({ defaultValues });

    const [deliverInfo, setDeliverInfo] = useState({});
  const onSubmit = (data) => {
      console.log(data)
        setDeliverInfo(data);
  }
  const {name, address, phone, email} = deliverInfo
    return (
      <div className="container">
        <div className="row mt-5 justify-content-between">
          <div className="col-md-6 col-sm-12">
            <h3>Delivery Details</h3>
            <form className="delivery-form" onSubmit={handleSubmit(onSubmit)}>
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
              <input type="submit" value="submit" />
            </form>
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
              <div>
                <img alt="" />
              </div>
              <div>
                <h6></h6>
                <p></p>
                <p></p>
              </div>
              <div className="">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;