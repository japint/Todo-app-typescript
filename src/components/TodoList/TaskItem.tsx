import React from "react";
import classes from "./TodoList.module.css";
import { TaskItemProps } from "./types";

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

export default TaskItem;
