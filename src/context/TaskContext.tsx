import React, { createContext, ReactNode, useContext } from "react";
import useTaskViewModel from "../viewmodels/useTaskViewModel";

type TaskContextType = ReturnType<typeof useTaskViewModel>;

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const taskVM = useTaskViewModel();

  return <TaskContext.Provider value={taskVM}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
