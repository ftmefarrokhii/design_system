import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import SabtKala from "./components/SabtKala";
import NewProducts from "./components/NewProducts";
import BestSelling from "./components/BestSelling";
import Navbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const App = () => {
  
  return (
    <div>
      <Route path="/" exact><HomePage /></Route>
      <Route path="/register"><Register /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/admin"><SabtKala/></Route>
      <Route path="/newest"><Navbar></Navbar><NewProducts/></Route>
      {/* <Route path="/newest"><Navbar></Navbar><NewProducts/></Route> */}
      <Route path="/bestselling"><BestSelling/></Route>
    </div>
  );
};

export default App;
