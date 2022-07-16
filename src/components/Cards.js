import React from "react";
const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="item">
      <img src={img} alt="Image" />
      <h4>{title}</h4>
      <p>Price {price}$</p>
      <button className="add" onClick={() => handleClick(item)}>Add to Cart</button>
    </div>
  );
};

export default Cards;
