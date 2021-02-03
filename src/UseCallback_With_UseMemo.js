import React, { useState, useMemo, useCallback } from "react";
const Callback = () => {
  //States
  const [count, setCount] = useState(0);

  //Functions
  const func1 = useCallback(() => {
    let a = count * 10;
  }, [count]);
  const func2 = useMemo(() => {
    let a = count * 10;
    return a;
  }, [count]);

  console.log(func1);
  console.log(func2);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
};

export default Callback;