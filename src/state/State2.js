import React, { useState } from "react";

const State2 = () => {
  const [name, setName] = useState({ fname: "", lname: "" });
  return (
    <div>
      <input
        type="text"
        placeholder="FirstName"
        value={name.fname}
        onChange={(e) => setName({ ...name, fname: e.target.value })}
      />
      <input
        type="text"
        placeholder="LastName"
        value={name.lname}
        onChange={(e) => setName({ ...name, lname: e.target.value })}
      />
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default State2;
