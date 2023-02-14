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

  useEffect(() => {
    handlePrice();
  });

  const cancelHandler =()=>{
    setShow(true);
  }
  
  const clearHandler = () => {
    setCart([]);
  }

  const orderHandler=(e)=>{
    console.log(cart); 
    setShow(true);
    // clearHandler();
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
        <button onClick={clearHandler}>Clear cart</button>
      </div>
     
    </article>
  );
};

export default Cart;
