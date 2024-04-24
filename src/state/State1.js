import React, { useState } from "react";

const State1 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h2>Count : {count}</h2>
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

export default State1;
