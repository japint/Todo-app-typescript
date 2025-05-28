import React, { useState, ChangeEvent } from "react";
import classes from "./TodoList.module.css";
import {
  addTask,
  deleteTask,
  handleInputChange,
  moveTaskDown,
  moveTaskUp,
} from "./todoService";

type Task = string;

type TaskItemProps = {
  task: Task;
  index: number;
  onDelete: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  index,
  onDelete,
  onMoveUp,
  onMoveDown,
}) => (
  <li>
    <span className={classes.text}>{task}</span>
    <button className={classes.deleteBtn} onClick={() => onDelete(index)}>
      Delete
    </button>
    <button className={classes.moveBtn} onClick={() => onMoveUp(index)}>
      Up
    </button>
    <button className={classes.moveBtn} onClick={() => onMoveDown(index)}>
      Down
    </button>
  </li>
);

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    "Wake up early",
    "Take a shower",
    "Eat breakfast",
  ]);
  const [newTask, setNewTask] = useState<string>("");

  return (
    <div className={classes.toDoList}>
      <h1>To-Do-List</h1>
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
