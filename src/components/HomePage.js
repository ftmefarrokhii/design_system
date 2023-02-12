import React, { useState, useEffect } from "react";
import Amazon from "./amazon";
import Navbar from "./navbar";
import Cart from "./cart";
import NewProducts from "./NewProducts";
import BestSelling from "./BestSelling";

const HomePage =()=>{
    const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);
    return(
        <React.Fragment>
            <Navbar setShow={setShow} size={cart.length} />
              {show ? (
             <Amazon handleClick={handleClick}/>
             ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} setShow={setShow} />
             )}
             <NewProducts></NewProducts>
             <BestSelling></BestSelling>
        </React.Fragment>
    )
}
export default HomePage;