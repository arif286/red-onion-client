import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import image from '../../onion-restaurent/bannerbackground.png';
import { createAccountWithEmailPassword, initializeLoginFramework } from '../LogIn/LoginManager';
import WithoutLogin from '../LogIn/WithoutLogin';
import './SingUp.css';
const bgImage = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat, repeat",
  backgroundSize: "cover",
    backgroundPosition: "bottom",
};

const SingUp = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
  initializeLoginFramework();
    let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = (data) => {
        const { firstName, lastName, email, password } = data;
        const name = `${firstName} ${lastName}`
        createAccountWithEmailPassword(email, password, name)
          .then(res => {
            console.log(res)
            // console.log(res.displayName, res.email)
            setLoggedInUser(res);
            history.replace(from);
          })
          .catch(error => {
          console.log(error)
            setLoggedInUser(error);
        })
    };
  const [login, setLogin] = useState(false);
  const handleToggleLogin = () => {

  }
    return (
      <div style={bgImage}>
        <div className="container">
          <h1 className="form-header"> Create An Account</h1>
          {loggedInUser.email && (
            <div className="alert alert-success" role="alert">
              Your account has been created successfully!
            </div>
          )}
          <form className="form-submit" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input
              defaultValue=""
              name="firstName"
              placeholder="Your first name"
              ref={register({
                validate: (value) => value.length > 3,
                required: true,
              })}
            />
            {errors.firstName && (
              <p>Your first name is less than 3 characters</p>
            )}

            <label htmlFor="lastName">Last Name</label>
            <input
              defaultValue=""
              name="lastName"
              placeholder="Your last name"
              ref={register({
                validate: (value) => value.length > 2,
                required: true,
              })}
            />
            {errors.lastName && <p>Your last name is less than 2 characters</p>}

            <label htmlFor="email">Email</label>
            <input
              defaultValue=""
              name="email"
              placeholder="Your Email"
              type="email"
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p>Your email is invalid</p>}

            <label htmlFor="password">Password</label>
            <input
              defaultValue=""
              name="password"
              placeholder="Your Password"
              type="password"
              ref={register({
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
              })}
            />
            {errors.password && (
              <p>
                password between 6 to 20 characters which contain one numeric
                digit, one uppercase and one lowercase letter.
              </p>
            )}
            <input type="submit" />
          </form>
          {!loggedInUser.success && <p>{loggedInUser.error}</p>}
          <div>
            <WithoutLogin />
            <p className="text-center">
              Have an account?
              <span onClick={()=>handleToggleLogin()}>Login now.</span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SingUp;