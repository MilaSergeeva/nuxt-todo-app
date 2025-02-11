<template>
  <div>
    <ToDoForm @onAddTodos="addToDoHandler"></ToDoForm>
    <ToDoItemsList
      :toDoItems="toDoItems"
      :showAll="showAll"
      :areAllCompleted="areAllCompleted"
      @toggleToDo="toggleToDoItem"
      @onDeleteTodos="removeTodoHandler"
      @onToggleFilterBtn="toggleFilter"
      @onHandleAllDone="completeAllTodos"
      @onHandleEmpty="deleteAllTodos"
    ></ToDoItemsList>
  </div>
</template>

<script setup lang="ts">
import { useTodos } from "../composables/useTodos";

const {
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
