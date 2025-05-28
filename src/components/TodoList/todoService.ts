import React from "react";

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setNewTask: React.Dispatch<React.SetStateAction<string>>
): void => {
  setNewTask(e.target.value);
};

export const addTask = (
  task: string,
  setTasks: React.Dispatch<React.SetStateAction<string[]>>,
  setNewTask: React.Dispatch<React.SetStateAction<string>>
): void => {
  if (task.trim() !== "") {
    setTasks((prev) => [...prev, task]);
    setNewTask("");
  }
};

export const deleteTask = (
  index: number,
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
): void => {
  setTasks((prev) => prev.filter((_element, i) => i !== index));
};

export const moveTaskUp = (
  index: number,
  tasks: string[],
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
): void => {
  if (index > 0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  }
};
export const moveTaskDown = (
  index: number,
  tasks: string[],
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
): void => {
  if (index < tasks.length - 1) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  }
};
