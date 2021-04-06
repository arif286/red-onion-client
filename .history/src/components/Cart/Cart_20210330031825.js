import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Cart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { count, foodItem } = loggedInUser;

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-sm-12">
            <h3>Delivery Details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="name" />
              <input type="text" placeholder="Address" />
              <input type="phone" placeholder="phone" defaultValue="+880" />
              <input type="email" placeholder="email" />
            </form>
          </div>
          <div className="col-md-4 col-sm-12"></div>
        </div>
        <h1>food Cart</h1>
      </div>
    );
};

export default Cart;