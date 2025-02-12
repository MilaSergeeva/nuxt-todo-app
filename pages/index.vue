<template>
  <Transition>
    <div v-if="isVisible" class="todo-list">
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
  </Transition>
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

  setTimeout(() => {
    isVisible.value = true; // Плавное появление списка после загрузки
  }, 100);
});

const isVisible = ref<boolean>(false);

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

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.9s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
