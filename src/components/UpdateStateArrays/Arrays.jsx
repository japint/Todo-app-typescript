import { useState } from "react";

const Arrays = () => {
  const [foods, setFoods] = useState(["Fries", "Fruit", "Cheese"]);
  const handleAddFood = () => {
    const newFood = document.getElementById("inputFood").value;
    document.getElementById("inputFood").value = "";

    setFoods((f) => [...f, newFood]);
  };
  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_element, i) => i !== index));
  };

  return (
    <div>
      <h1>List of Food</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" name="" id="inputFood" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default Arrays;
