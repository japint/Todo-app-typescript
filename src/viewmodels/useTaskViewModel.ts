import { useEffect, useState } from "react";

const useTaskViewModel = () => {
  const [tasks, setTasks] = useState<string[]>([
    "Wake up early",
    "Take a shower",
    "Eat breakfast",
  ]);

  const [newTask, setNewTask] = useState<string>("");
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isLightMode]);

  return {
    tasks,
    setTasks,
    newTask,
    setNewTask,
    isLightMode,
    setIsLightMode,
  };
};

export default useTaskViewModel;
