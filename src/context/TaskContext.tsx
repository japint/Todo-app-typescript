import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type TaskContextType = {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  isLightMode: boolean;
  setIsLightMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        newTask,
        setNewTask,
        isLightMode,
        setIsLightMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
