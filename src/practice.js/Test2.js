// useState allow functional components to manage states

import React, { useState } from "react";

const Test2 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        placeholder="FirstName"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="LastName"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default Test2;
