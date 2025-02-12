import { ref, computed, reactive, watch } from "vue";
import type { TodoItemInterface } from "~/models/TodoItems/TodoItem.interface";

export const useTodos = () => {
  const todos: TodoItemInterface[] = reactive([]);
  const showAll = ref(true);

  // Load saved Todos from localStorage

  const loadTodos = (): void => {
    const savedTodos = localStorage.getItem("toDoItems");

    if (savedTodos) {
      try {
        const parsedTodos: TodoItemInterface[] = JSON.parse(savedTodos);
        todos.push(...parsedTodos);
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
      }
    }
  };

  // Save Todos to localStorage whenever they change
  watch(
    todos,
    (newTodos) => {
      localStorage.setItem("toDoItems", JSON.stringify(newTodos));
    },
    { deep: true }
  );

  // Add a new Todo
  const addTodo = (name: string): void => {
    const newTodo: TodoItemInterface = {
      id: Date.now(),
      name,
      completed: false,
    };

    todos.unshift(newTodo);
  };

  // Toggle a Todo's completion state
  const toggleTodo = (id: number): void => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed;
      sortTodos();
    }
  };

  // Sort Todos by completed status
  const sortTodos = (): void => {
    todos.sort((a, b) => Number(a.completed) - Number(b.completed));
  };

  // Toggle the filter for showing all or incomplete Todos
  const toggleFilter = (): void => {
    showAll.value = !showAll.value;
  };

  // Remove a Todo by ID
  const removeTodo = (id: number): void => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      todos.splice(index, 1);
    }
  };

  // Mark all Todos as complete
  const markAllTodosAsCompleted = (): void => {
    todos.forEach((todo) => (todo.completed = true));
  };

  // Remove all Todos
  const clearTodos = (): void => {
    const shouldRemove = window.confirm("Are you sure?");

    if (shouldRemove) {
      todos.splice(0, todos.length);
    }
  };

  // Check if all Todos are completed
  const areAllCompleted = computed<boolean>(() =>
    todos.every((todo) => todo.completed)
  );

  watch(areAllCompleted, (val) => {
    if (val) {
      showAll.value = true;
    }
  });

  return {
    todos,
    showAll,
    areAllCompleted,
    addTodo,
    toggleTodo,
    removeTodo,
    markAllTodosAsCompleted,
    clearTodos,
    toggleFilter,
    loadTodos,
  };
};
