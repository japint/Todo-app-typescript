export type Task = string;

export interface TaskItemProps {
  task: Task;
  index: number;
  onDelete: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}
