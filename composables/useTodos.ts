import { ref, computed, reactive, watch } from "vue";
import type { ToDoItemInterface } from "../models/ToDoItems/ToDoItem.interface";

export const useTodos = () => {
  const ToDoItems: ToDoItemInterface[] = reactive([]);
  const showAll = ref(true);

  // Load saved Todos from localStorage
  const loadTodos = () => {
    const savedTodos = localStorage.getItem("ToDoItems");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      parsedTodos.forEach((todo: ToDoItemInterface) => ToDoItems.push(todo));
    }
  };

  // Save Todos to localStorage whenever they change
  watch(
    ToDoItems,
    (newTodos) => {
      localStorage.setItem("ToDoItems", JSON.stringify(newTodos));
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
    ToDoItems.unshift(newTodo);
  };

  // Toggle a Todo's completion state
  const toggleToDo = (id: number) => {
    const todo = ToDoItems.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      sortToDoItems();
    }
  };

  // Sort Todos by completed status
  const sortToDoItems = () => {
    ToDoItems.sort((a, b) => Number(a.completed) - Number(b.completed));
  };

  // Filter Todos based on the 'showAll' state
  const filteredToDoItems = computed(() => {
    return showAll.value
      ? ToDoItems
      : ToDoItems.filter((todo) => !todo.completed);
  });

  // Toggle the filter for showing all or incomplete Todos
  const toggleFilter = () => {
    showAll.value = !showAll.value;
  };

  // Remove a Todo by ID
  const removeToDo = (id: number) => {
    const shouldRemove = window.confirm("Are you sure?");
    if (shouldRemove) {
      ToDoItems.splice(
        ToDoItems.findIndex((todo) => todo.id === id),
        1
      );
    }
  };

  // Mark all Todos as complete
  const completeAllTodos = () => {
    ToDoItems.forEach((todo) => (todo.completed = true));
  };

  // Remove all Todos
  const deleteAllTodos = () => {
    const shouldRemove = window.confirm("Are you sure?");
    if (shouldRemove) {
      ToDoItems.splice(0, ToDoItems.length);
    }
  };

  // Check if all Todos are completed
  const areAllCompleted = computed(() => {
    return ToDoItems.every((todo) => todo.completed);
  });

  return {
    ToDoItems,
    showAll,
    filteredToDoItems,
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
