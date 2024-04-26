import React, { useState, useEffect } from "react";

const Test5 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState([]);
  useEffect(() => {
    console.log("run Once (ComponentDidMount)");
  }, [count]);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Test5;
