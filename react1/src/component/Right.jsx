import React from "react";
import "../Css/Right.css";
import { Link } from "react-router-dom";

export const Right = (props) => {
  console.log(props.receivedData);
  return (
    <div className="main-container">
      <h1>Card</h1>
      <div className="subcontainer">
        <div className="name">{props.receivedData.Name}</div>
        <div className="price">Price : Rs. {props.receivedData.Price}</div>
        <div className="id">Item Id : {props.receivedData.id}</div>
      </div>
      <Link to="/1">link for question 2</Link>
    </div>
  );
};
