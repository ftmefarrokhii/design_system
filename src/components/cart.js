import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange ,setShow }) => {
  const [price, setPrice] = useState(0); 

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  // const handleAmount = () => {
  //   let am = 0;
  //   cart.map((item) => (am += item.amount ));
  //   setAmountitem(am);
  // };


  useEffect(() => {
    handlePrice();
    // handleAmount();
  });

  const cancelHandler =()=>{
    setShow(true);
  }
  const orderHandler=(e)=>{
    console.log(cart); 
    setShow(true);
  }

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
        <button onClick={orderHandler}>Order</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
     
    </article>
  );
};

export default Cart;
