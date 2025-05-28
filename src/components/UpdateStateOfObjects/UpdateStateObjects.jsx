import { useState } from "react";

const UpdateStateObjects = () => {
  const [car, setCar] = useState({
    year: 2025,
    make: "Toyota",
    model: "Hilux",
  });

  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };
  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };
  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
};

export default UpdateStateObjects;
