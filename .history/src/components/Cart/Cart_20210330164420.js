import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Cart.css';
const Cart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { count, foodItem } = loggedInUser;

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
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
                name="instruction"
                placeholder="delivery instruction"
                required={true}
              />
              <input type="submit" value="submit" />
            </form>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>From:</h5>
            <p>Address:</p>
            <p>Phone:</p>
            <p>Email:</p>
          </div>
        </div>
      </div>
    );
};

export default Cart;