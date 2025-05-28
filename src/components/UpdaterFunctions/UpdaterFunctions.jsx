// updater function = a function passed as an argument to setState() usually
//                    ex. setYear(arrow functions)
//                    allow for safe updates based on the previous state
//                    used with multiple state updates and asynchronous functions
//                    good practice to use updater functions

import { useState } from "react";
import classes from "./UpdaterFunctions.module.css";

const UpdaterFunctions = () => {
  const [count, setCount] = useState(0);
  // updater function
  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
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

export default UpdaterFunctions;
