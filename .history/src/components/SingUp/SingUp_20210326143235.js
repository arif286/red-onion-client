import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import image from '../../onion-restaurent/bannerbackground.png';
import { createAccountWithEmailPassword, initializeLoginFramework } from '../LogIn/LoginManager';
import WithoutLogin from '../LogIn/WithoutLogin';
import './SingUp.css';
const bgImage = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat, repeat",
  // height: "100vh",
  backgroundSize: "cover",
    backgroundPosition: "bottom",
};

const SingUp = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
  initializeLoginFramework();

    const onSubmit = (data) => {
        const { firstName, lastName, email, password } = data;
        const name = `${firstName} ${lastName}`
        createAccountWithEmailPassword(email, password, name)
          .then(res => {
            console.log(res)
            console.log(res.displayName, res.email)
            setLoggedInUser(res);
          })
          .catch(error => {
          console.log(error)
            setLoggedInUser(error);
        })
    };
   console.log(loggedInUser);
    return (
      <div style={bgImage}>
        <div className='container'>
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
            {loggedInUser.success && <p>{loggedInUser.error}</p>}
          </form>
          <div>
            <WithoutLogin />
            <p className="text-center">
              Have an account?
              <Link to="/login">Login now.</Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SingUp;