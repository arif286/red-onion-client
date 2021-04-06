import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import image from "../../onion-restaurent/bannerbackground.png";
import { initializeLoginFramework, logInWithEmailPassword } from "./LoginManager";


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


  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
      initializeLoginFramework();

      console.log(data);
      logInWithEmailPassword(data.email, data.password)
        .then(res => {
          setLoggedInUser(res);
        })
        .catch(error => {
          setLoggedInUser(error);
        })
  };

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
        <p className="text-center">
          Don't have an account?
          <Link to="/singUp">Sing up now.</Link>
        </p>
      </form>

    </div>
  );
};

export default Login;
