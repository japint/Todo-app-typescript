import classes from "./TodoList.module.css";
import { addTask, handleInputChange } from "../services/todoService";
import TaskItem from "./TaskItem";
import { useTaskContext } from "../context/TaskContext";

const TodoList = () => {
  const { tasks, setTasks, newTask, setNewTask, isLightMode, setIsLightMode } =
    useTaskContext();

  return (
    <div className={classes.toDoList}>
      <h1>DevGelo Todo-List</h1>
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
          onChange={handleInputChange(setNewTask)}
        />
        <button
          className={classes.addBtn}
          onClick={addTask(newTask, setTasks, setNewTask)}
        >
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
