import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import SabtKala from "./components/SabtKala";

const App = () => {
  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  // // useEffect(() => {
  // //   console.log("cart change");
  // // }, [cart]);

  return (
    // <React.Fragment>
    //   <Navbar setShow={setShow} size={cart.length} />
    //   {show ? (
    //     <Amazon handleClick={handleClick} />
    //   ) : (
    //     <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    //   )}
    // </React.Fragment>
    <div>
      <Route path="/" exact><HomePage /></Route>
      <Route path="/register"><Register /></Route>
      <Route path="/login"><Login /></Route>
      {/* <Route path="/admin"><SabtKala /></Route> */}
      <SabtKala></SabtKala>

    </div>
  );
};

export default App;
