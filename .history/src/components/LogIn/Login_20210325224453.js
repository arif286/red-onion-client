import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import image from "../../assets/bannerbackground.png";
import facebook from "../../assets/ICON/Facebook.png";
import google from "../../assets/ICON/Google.png";
import twitter from "../../assets/ICON/Twitter.png";
import "./Login.css";
import { handleFacebookSignIn, handleGoogleSingIn, initializeLoginFramework, logInWithEmailPassword } from "./LoginManager";

const bgImage = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat, repeat",
  height: "100vh",
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
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
      console.log(data);
      logInWithEmailPassword(data.email, data.password)
        .then(res => {
          setLoggedInUser(res);
        })
        .catch(error => {
          setLoggedInUser(error);
        })
  };

  initializeLoginFramework();
  const handleGoogleLogin = () => {
    handleGoogleSingIn().then((res) => {
      console.log(res);
      setLoggedInUser(res);
      history.replace(from);
    });
    console.log("click me");
  };
  const handleFacebookLogin = () => {
    handleFacebookSignIn()
      .then(res => {
      setLoggedInUser(res)
      }).catch(error => {
      setLoggedInUser(error)
    })
  };
  const handleTwitterLogin = () => {};
  return (
    <div style={bgImage}>
      <h1 className="form-header">Log In</h1>
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
            password between 6 to 20 characters which contain one numeric digit,
            one uppercase and one lowercase letter.
          </p>
        )}

        <input type="submit" value="Login" />
        {setLoggedInUser.success && (
          <p className="text-center">{setLoggedInUser.error}</p>
        )}
      </form>

      <div className="mt-5">
        <p className="text-center">Or sing up using</p>
        <div className="d-flex justify-content-center">
          <p className="icon">
            <img onClick={handleFacebookLogin} src={facebook} alt="" />
          </p>
          <p className="icon">
            <img onClick={handleTwitterLogin} src={twitter} alt="" />
          </p>
          <p className="icon">
            <img onClick={handleGoogleLogin} src={google} alt="" />
          </p>
        </div>
        <p className="text-center">
          Don't have an account?
          <Link to="/singUp">Sing up now.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
