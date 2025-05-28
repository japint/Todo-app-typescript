import React, { useState, ChangeEvent, useEffect } from "react";
import classes from "./TodoList.module.css";
import {
  addTask,
  deleteTask,
  handleInputChange,
  moveTaskDown,
  moveTaskUp,
} from "./todoService";
import TaskItem from "./TaskItem";

const TodoList: React.FC = () => {
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
    <div className={classes.toDoList}>
      <h1>APC Todo</h1>
      <div className={classes.toggleWrapper}>
        <label className={classes.switch}>
          <input
            type="checkbox"
            checked={isLightMode}
            onChange={() => setIsLightMode((prev) => !prev)}
          />
          <span className={classes.slider}></span>
        </label>
      </div>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Input a task"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, setNewTask)
          }
        />
        <button
          className={classes.addBtn}
          onClick={() => addTask(newTask, setTasks, setNewTask)}
        >
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            onDelete={(i) => deleteTask(i, setTasks)}
            onMoveUp={(i) => moveTaskUp(i, tasks, setTasks)}
            onMoveDown={(i) => moveTaskDown(i, tasks, setTasks)}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
