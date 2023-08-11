import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    if (count === 6) {
      throw new Error("count error");
    } else {
      setCount(count + 1);
    }
  };

  return <button onClick={countHandler}>Counter:{count}</button>;
};

export default Counter;
