import React, { useContext } from "react";
import { nameContext } from "../App";

const Context5 = () => {
  const myName = useContext(nameContext);
  return <div>{myName}</div>;
};

export default Context5;
