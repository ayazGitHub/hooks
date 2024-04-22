import React, { useState } from "react";

const State2 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        placeholder="FirstName"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        placeholder="LastName"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
};

export default State2;
