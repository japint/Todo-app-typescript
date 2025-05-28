// import Counter from "./components/Counter";
// import MyComponents from "./components/MyComponents";
// import OnChange from "./components/OnChange";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import UpdaterFunctions from "./components/UpdaterFunctions/UpdaterFunctions";
// import Arrays from "./components/UpdateStateArrays/Arrays";
// import ArrayOfObjectsInState from "./components/ArrayOfObjectsInState/ArrayOfObjectsInState";
// import UpdateStateObjects from "./components/UpdateStateOfObjects/updateStateObjects";

import React from "react";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  return (
    <>
      <TodoList />
      {/*   
      <ArrayOfObjectsInState />
      <Arrays />
      <UpdateStateObjects />
      <UpdaterFunctions />
      <ColorPicker />
      <OnChange />
      <MyComponents />
      <Counter /> */}
    </>
  );
};

export default App;
