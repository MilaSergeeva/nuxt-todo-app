export interface TodoItemInterface {
  id: number;
  name: string;
  completed: boolean;
}

export interface UseTodosReturn {
  todos: TodoItemInterface[];
  showAll: Ref<boolean>;
  areAllCompleted: ComputedRef<boolean>;
  addTodo: (name: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  markAllTodosAsCompleted: () => void;
  clearTodos: () => void;
  toggleFilter: () => void;
  loadTodos: () => void;
}
