import React, { useEffect, useState } from "react";
// ComponentDidMount
const Effect2 = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const mouseLog = (e) => {
    console.log("mouseLog Called");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", mouseLog);
    return () => {
      console.log("component unmount");
      window.removeEventListener("mousemove", mouseLog);
    };
  }, []);
  return (
    <div>
      <h3>X : {x}</h3>
      <h3>Y : {y}</h3>
    </div>
  );
};

export default Effect2;
