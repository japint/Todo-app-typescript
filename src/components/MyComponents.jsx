import { useState } from "react";

const MyComponents = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Walter White");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleIsEmployed}>Toggle</button>
    </div>
  );
};

export default MyComponents;
