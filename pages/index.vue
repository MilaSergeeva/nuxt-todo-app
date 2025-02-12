<template>
  <div>
    <TodoForm @add-todo="handleAddTodo"></TodoForm>
    <TodoItemsList
      :to-do-items="todos"
      :show-all="showAll"
      :are-all-completed="areAllCompleted"
      @toggle-to-do="handleToggleTodo"
      @delete-todo="handleRemoveTodo"
      @toggle-filter-btn="toggleFilter"
      @handle-all-done="markAllTodosAsCompleted"
      @handle-empty="clearTodos"
    ></TodoItemsList>
  </div>
</template>

<script setup lang="ts">
import { useTodos } from "@/composables/useTodos";
import type { UseTodosReturn } from "~/models/TodoItems/TodoItem.interface";

const {
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
} = useTodos() as UseTodosReturn;

onMounted(() => {
  loadTodos();
});

// Handler to add a new Todo
const handleAddTodo = (name: string): void => {
  addTodo(name);
};

// Handler to toggle a Todo's completion state
const handleToggleTodo = (id: number): void => {
  toggleTodo(id);
};

// Handler to delete a Todo
const handleRemoveTodo = (id: number): void => {
  removeTodo(id);
};
</script>
