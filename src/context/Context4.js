import React, { useContext } from "react";
import { nameContext } from "../App";
const Context4 = () => {
  const myName = useContext(nameContext);
  return <div>my name is {myName}</div>;
};

export default Context4;
