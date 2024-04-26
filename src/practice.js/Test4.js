import React, { useEffect, useState } from "react";

const Test4 = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  useEffect(() => {
    console.log("Component Mounted (ComponentDidMount)");
    return () => {
      console.log("Component is unmounted (ComponentWillUnmount)");
    };
  }, []);
  useEffect(() => {
    console.log("Component is Updated (ComponentDidUpdate)");
  }, [items]);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test4;
