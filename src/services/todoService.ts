import { ChangeEvent, MouseEvent } from "react";

export const handleInputChange =
  (setNewTask: React.Dispatch<React.SetStateAction<string>>) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

export const addTask =
  (
    newTask: string,
    setTasks: React.Dispatch<React.SetStateAction<string[]>>,
    setNewTask: React.Dispatch<React.SetStateAction<string>>
  ) =>
  (_e: MouseEvent<HTMLButtonElement>) => {
    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, newTask]);
      setNewTask("");
    }
  };

export const deleteTask =
  (index: number, setTasks: React.Dispatch<React.SetStateAction<string[]>>) =>
  (_e: MouseEvent<HTMLButtonElement>) => {
    setTasks((prev) => prev.filter((_element, i) => i !== index));
  };

export const moveTaskUp =
  (
    index: number,
    tasks: string[],
    setTasks: React.Dispatch<React.SetStateAction<string[]>>
  ) =>
  (_e: MouseEvent<HTMLButtonElement>) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

export const moveTaskDown =
  (
    index: number,
    tasks: string[],
    setTasks: React.Dispatch<React.SetStateAction<string[]>>
  ) =>
  (e: MouseEvent<HTMLButtonElement>) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
