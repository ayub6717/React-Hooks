import React, { useState } from "react";

function HookCounterTree() {
  const [name, setName] = useState({ FirstName: "", LastName: "" });
  return (
    <div>
      <input
        placeholder="Enter your Firstname"
        type="text"
        value={name.FirstName}
        onChange={(e) => setName({ ...name, FirstName: e.target.value })}
      />
      <input
        placeholder="Enter your Lastname"
        type="text"
        value={name.LastName}
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <button onClick={(e) => setName({})}>Reset</button>

      <h2>Your Firstname: {name.FirstName} </h2>
      <h2>Your Lastname: {name.LastName} </h2>
    </div>
  );
}

export default HookCounterTree;
