import React from "react";
import TodoList from "./components/TodoList";
import "./globals.css";
import { TaskProvider } from "./context/TaskContext";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  );
};

export default App;
