import React from "react";
import StarSix from "./StarSix";
import { Link } from "react-router-dom";

const Cards = ({ item, handleClick }) => {
  const { title, code, price, img ,amount} = item;

  const detailHandler=()=>{
    console.log(item.id)
  }
  const AlertHandler=()=>{
    if(amount == 0){
      setTimeout(()=> {
        alert("we will remind you if this product exists")},3000);
    }
  }
 
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Code : {code}</p>
        <p>Price : {price}Rs</p>
        <p>amount : {amount}</p>
        <p><StarSix></StarSix></p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
        <Link to="/detail"><button onClick={detailHandler}>Show Detail</button></Link>
        <button onClick={AlertHandler}>Remind me if exist</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
