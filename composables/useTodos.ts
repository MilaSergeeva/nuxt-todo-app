import { ref, computed, reactive, watch } from "vue";
import type { ToDoItemInterface } from "../models/ToDoItems/ToDoItem.interface";

export const useTodos = () => {
  const toDoItems: ToDoItemInterface[] = reactive([]);
  const showAll = ref(true);

  // Load saved Todos from localStorage
  const loadTodos = () => {
    const savedTodos = localStorage.getItem("toDoItems");

    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);

      parsedTodos.forEach((todo: ToDoItemInterface) => toDoItems.push(todo));
    }
  };

  // Save Todos to localStorage whenever they change
  watch(
    toDoItems,
    (newTodos) => {
      localStorage.setItem("toDoItems", JSON.stringify(newTodos));
    },
    { deep: true }
  );

  // Add a new Todo
  const addToDo = (name: string) => {
    const newTodo: ToDoItemInterface = {
      name,
      id: Date.now(),
      completed: false,
    };

    toDoItems.unshift(newTodo);
  };

  // Toggle a Todo's completion state
  const toggleToDo = (id: number) => {
    const todo = toDoItems.find((todo) => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed;
      sortToDoItems();
    }
  };

  // Sort Todos by completed status
  const sortToDoItems = () => {
    toDoItems.sort((a, b) => Number(a.completed) - Number(b.completed));
  };

  // Toggle the filter for showing all or incomplete Todos
  const toggleFilter = () => {
    showAll.value = !showAll.value;
  };

  // Remove a Todo by ID
  const removeToDo = (id: number) => {
    const shouldRemove = window.confirm("Are you sure?");

    if (shouldRemove) {
      toDoItems.splice(
        toDoItems.findIndex((todo) => todo.id === id),
        1
      );
    }
  };

  // Mark all Todos as complete
  const completeAllTodos = () => {
    toDoItems.forEach((todo) => (todo.completed = true));
  };

  // Remove all Todos
  const deleteAllTodos = () => {
    const shouldRemove = window.confirm("Are you sure?");

    if (shouldRemove) {
      toDoItems.splice(0, toDoItems.length);
    }
  };

  // Check if all Todos are completed
  const areAllCompleted = computed(() => {
    return toDoItems.every((todo) => todo.completed);
  });

  watch(areAllCompleted, (val) => {
    if (val) {
      showAll.value = true;
    }
  });

  return {
    toDoItems,
    showAll,
    addToDo,
    toggleToDo,
    removeToDo,
    completeAllTodos,
    deleteAllTodos,
    areAllCompleted,
    toggleFilter,
    loadTodos,
  };
};
