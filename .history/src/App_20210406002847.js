import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CheckOut from "./components/CheckOut/CheckOut";
import Map from "./components/CheckOut/Map/Map";
import FoodDetail from "./components/FoodDetails/FoodDetail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from "./components/LogIn/Login";
import Order from "./components/Order/Order";
import SingUp from "./components/SingUp/SingUp";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signUp">
            <SingUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/food/details/:foodId">
            <FoodDetail />
          </Route>
          <Route path='/checkOut'>
            <CheckOut/>
          </Route>
          <Route path='/order'>
            <Order/>
          </Route>
          <Route path='/map'>
            <Map/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );

}

export default App;
