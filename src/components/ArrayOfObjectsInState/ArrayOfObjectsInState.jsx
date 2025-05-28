import { useState } from "react";

const ArrayOfObjectsInState = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    console.log(newCar);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_element, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };
  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };
  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <div>
      <h2>List of Car Objects</h2>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        placeholder="Enter car make"
        onChange={handleMakeChange}
      />
      <br />
      <input
        type="text"
        value={carModel}
        placeholder="Enter car model"
        onChange={handleModelChange}
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayOfObjectsInState;
