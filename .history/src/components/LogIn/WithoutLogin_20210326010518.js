import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from '../../App';
import facebook from "../../assets/ICON/Facebook.png";
import google from "../../assets/ICON/Google.png";
import "./Login.css";
import {
    handleFacebookSignIn,
    handleGoogleSingIn,
    initializeLoginFramework
} from "./LoginManager";


const WithoutLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
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
          .then((res) => {
            setLoggedInUser(res);
          })
          .catch((error) => {
            setLoggedInUser(error);
          });
      };
    return (
      <div className="mt-5">
        <p className="text-center">Or sing up using</p>
        <div className="d-flex justify-content-center">
          <p className="icon">
            <img onClick={handleFacebookLogin} src={facebook} alt="" />
          </p>
          <p className="icon">
            <img onClick={handleGoogleLogin} src={google} alt="" />
          </p>
        </div>
      </div>
    );
};

export default WithoutLogin;