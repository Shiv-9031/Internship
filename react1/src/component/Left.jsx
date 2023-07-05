import React from "react";
import { data } from "./data";
import "../Css/Left.css";
export const Left = (props) => {
  //function for state lift
  const updateState = (value) => {
    props.data(value);
  };

  return (
    <div className="first-container">
      <h1>List of Items</h1>
      {data.map((data, index) => {
        return (
          <div
            className="first-sub-container"
            key={index}
            onClick={() => updateState(data)}
          >
            <h3>{data.Name}</h3>
          </div>
        );
      })}
    </div>
  );
};
