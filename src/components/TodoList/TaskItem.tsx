import {
  deleteTask,
  moveTaskDown,
  moveTaskUp,
} from "../../services/todoService";
import { useTaskContext } from "../../context/TaskContext";
import classes from "./TodoList.module.css";

type Props = {
  task: string;
  index: number;
};
const TaskItem = ({ task, index }: Props) => {
  const { tasks, setTasks } = useTaskContext();
  return (
    <li>
      <span className={classes.text}>{task}</span>
      <button
        className={classes.deleteBtn}
        onClick={deleteTask(index, setTasks)}
      >
        Delete
      </button>
      <button
        className={classes.moveBtn}
        onClick={moveTaskUp(index, tasks, setTasks)}
      >
        Up
      </button>
      <button
        className={classes.moveBtn}
        onClick={moveTaskDown(index, tasks, setTasks)}
      >
        Down
      </button>
    </li>
  );
};

export default TaskItem;
