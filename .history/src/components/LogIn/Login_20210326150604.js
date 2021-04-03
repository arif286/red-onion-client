import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import image from "../../onion-restaurent/bannerbackground.png";
import { initializeLoginFramework, logInWithEmailPassword } from "./LoginManager";
import WithoutLogin from "./WithoutLogin";


const bgImage = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat, repeat",
  minHeight: "800px",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
};
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [newLogInUser, setNewLogInUser] = useState({
  //   isSignedIn: false,
  //   name: '',
  //   email: '',
  //   password: '',
  //   photo: '',
  //   phone: ''
  // });

  let history = useHistory()
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
      initializeLoginFramework();
      const {email, password} = data
      logInWithEmailPassword(email, password)
        .then(res => {
          setLoggedInUser(res);
          history.push('/home')
        })
        .catch(error => {
          setLoggedInUser(error);
        })
  };

  return (
    <div style={bgImage}>
      <div className="container">
        <h1 className="form-header">Log In</h1>
        {loggedInUser.email && (
          <div className="d-flex justify-content-center">
            <p
              style={{ width: "500px" }}
              className="alert alert-success"
              role="alert"
            >
              You have login successfully!
            </p>
          </div>
        )}
        <form className="form-submit" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input
            defaultValue={loggedInUser?.email}
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
            defaultValue={loggedInUser?.password}
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
          <input type="submit" value="Login" />
        </form>
        {!setLoggedInUser.success && (
          <p className="text-center">{setLoggedInUser.error}</p>
        )}
        <div>
          <WithoutLogin />
          <p className="text-center">
            Don't have an account?
            <Link to="/singUp">Sing up now.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
