import React, { useState, useEffect } from "react";
// ComponentWillUpdate
const Effect1 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `Count :${count}`;
    console.log("Doc Title");
  }, [count]);
  return (
    <div>
      <h3>Count :{count}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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

export default Effect1;
