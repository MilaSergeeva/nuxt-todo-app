<template>
  <div>
    <ToDoForm @onAddTodos="addToDoHandler"></ToDoForm>
    <ToDoItemsList
      :filteredToDoItems="filteredToDoItems"
      :is-all-completed="areAllCompleted"
      :showAll="showAll"
      @toggleToDo="toggleToDoItem"
      @onDeleteTodos="removeTodoHandler"
      @onToggleFilterBtn="toggleFilter"
      @onHandleAllDone="completeAllTodos"
      @onHandleEmpty="deleteAllTodos"
      @onFilteredToDoItems="filteredToDoItems"
    ></ToDoItemsList>
  </div>
</template>

<script setup lang="ts">
import { useTodos } from "../composables/useTodos";

const {
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
} = useTodos();

onMounted(() => {
  loadTodos();
});

// Handler to add a new Todo
const addToDoHandler = (name: string) => {
  addToDo(name);
};

// Handler to toggle a Todo's completion state
const toggleToDoItem = (id: number) => {
  toggleToDo(id);
};

// Handler to delete a Todo
const removeTodoHandler = (id: number) => {
  removeToDo(id);
};
</script>
