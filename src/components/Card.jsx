import React from "react";
import "./Card.css";

const Card = ({ id, title, price, img, category }) => {
  return (
    <div className="card">
      <div className="card_pill">Sale</div>
      <img src={img} alt="title" className="card_img" />
      <div className="flex-row space-between w-full mb-sm">
        <p className="product_brand">{category}</p>
        <h1 className="product_name">{title}</h1>
        <p className="price">
          ₹<span>{price}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
