import React, { useContext } from "react";
import { nameContext } from "../App";

const Context6 = () => {
  const someName = useContext(nameContext);
  return <div>why is {someName}</div>;
};

export default Context6;
