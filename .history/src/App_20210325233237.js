import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from "./components/LogIn/Login";
import SearchBar from "./components/SearchBar/SearchBar";
import SingUp from "./components/SingUp/SingUp";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <SearchBar/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/singUp">
            <SingUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );

}

export default App;
