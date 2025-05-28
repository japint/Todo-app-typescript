import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className={classes.counterContainer}>
      <p className={classes.countDisplay}>{count}</p>
      <button className={classes.counterButton} onClick={decrement}>
        Decrement
      </button>
      <button className={classes.counterButton} onClick={reset}>
        reset
      </button>
      <button className={classes.counterButton} onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
