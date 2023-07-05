import React from "react";
import { Left } from "../component/Left";
import { Right } from "../component/Right";

import { data } from "../component/data";

export const First = () => {
  const [item, setItem] = React.useState(data[2]);

  //function received from data from left-child component
  function getValue(value) {
    setItem(value);
  }

  return (
    <div className="mainContainer" style={{ display: "flex" }}>
      <Left data={getValue} />
      <Right receivedData={item} />
    </div>
  );
};
