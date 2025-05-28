import React from "react";
<<<<<<< HEAD
import classes from "./TodoList.module.css";
import { TaskItemProps } from "./types";
=======
import { TaskItemProps } from "./types";
import classes from "./TodoList.module.css";
>>>>>>> 6e54877d0749e59dd440438090c2f6f0438d297a

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
