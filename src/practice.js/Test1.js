// useState hooks allows functional components to manage states

import React, { useState } from "react";

const Test1 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Test1;
