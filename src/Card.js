import React from "react";
import "./styles/Card.scss";

function Card({ title, value }) {
  return (
    <div className="card">
      <img src={"dish.png"} className="card-img" />
      <h5 className="card-title">{title}</h5>
      <div className="card-value-container">
        <p className="card-value">{value}</p>
        <p className="percent-value">3 %</p>
      </div>
    </div>
  );
}

export default Card;
