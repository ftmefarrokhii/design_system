import React from "react";
import StarSix from "./StarSix";

const Cards = ({ item, handleClick }) => {
  const { title, code, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Code : {code}</p>
        <p>Price : {price}Rs</p>
        <p><StarSix></StarSix></p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
