import React, { useContext } from "react";
import { nameContext } from "../App";

const Context3 = () => {
  const myName = useContext(nameContext);
  return (
    <div>
      <h3>My name is {myName} </h3>
    </div>
  );
};

export default Context3;
