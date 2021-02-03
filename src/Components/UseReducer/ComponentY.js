import React, { useContext } from "react";
import { CountContext } from "./../../App";

function ComponentY() {
  const countContext = useContext(CountContext);

  return (
    <div>
      Component -y
      <p>Count: {countContext.countValue} </p>
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentY;
