import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, description, image, title } = product;

  const navigate = useNavigate();
  return (
    <div className="card">
      <img className="image" src={image} alt={`Image of ${title}`} />
      <div className="card-content">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <h3 className="price">{price}$</h3>
      </div>
      <button
        className="detail-button"
        onClick={() => navigate("/product-details/" + id)}
      >
        Go to Detail
      </button>
    </div>
  );
}

export default Product;
