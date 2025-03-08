import React from "react";
import "../css/Product.css";

function Product({ product }) {
  const { id, price, description, image, title } = product;
  return (
    <div className="card">
      <img className="image" src={image} alt={`Image of ${title}`} />
      <div className="card-content">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <h3 className="price">{price}$</h3>
      </div>
      <button className="detail-button">Go to Detail</button>
    </div>
  );
}

export default Product;
