import React, { useState } from "react";

const State1 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Addition
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Subtraction
      </button>
    </div>
  );
};

export default State1;
