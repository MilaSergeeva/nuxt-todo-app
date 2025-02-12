<template>
  <div id="todoList">
    <TransitionGroup name="todo-fade" tag="ul">
      <li
        v-for="item in toDoItems"
        :key="item.id"
        v-if="showAll || (!showAll && !item.completed)"
        class="todo"
      >
        <label>
          <input
            type="checkbox"
            class="color-blue-grey"
            v-model="item.completed"
            @click="onTodoItemComplete(item)"
          />
          <span :class="{ completed: item.completed }">{{ item.name }}</span>
          <i
            class="material-icons color-blue-grey"
            @click="onTodoItemDelete($event, item.id)"
            >delete</i
          >
        </label>
      </li>
    </TransitionGroup>
    <div>
      <Button
        type="button"
        @click="onToggleFilter"
        :class="[
          'btn-min-width',
          { disabled: toDoItems.length === 0 || areAllCompleted },
        ]"
      >
        {{ showAll ? "Show Incomplete" : "Show All" }}
      </Button>
      <Button
        type="button"
        @click="onMarkAllCompleted"
        :class="[
          'btn-min-width',
          { disabled: toDoItems.length === 0 || areAllCompleted },
        ]"
      >
        Mark all as complete
      </Button>
      <Button
        type="button"
        @click="onResetTodoList"
        :class="['btn-min-width', { disabled: toDoItems.length === 0 }]"
      >
        Reset Todo List
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TodoItemInterface } from "~/models/TodoItems/TodoItem.interface";

defineProps<{
  toDoItems: TodoItemInterface[];
  showAll: boolean;
  areAllCompleted: boolean;
}>();

const emit = defineEmits<{
  (e: "toggleToDo", id: number): void;
  (e: "deleteTodo", id: number): void;
  (e: "toggleFilterBtn"): void;
  (e: "handleAllDone"): void;
  (e: "handleEmpty"): void;
}>();

// function to comlete to do item
const onTodoItemComplete = (item: TodoItemInterface) => {
  emit("toggleToDo", item.id);
};

// function to delete to do item
const onTodoItemDelete = (event: MouseEvent, id: number) => {
  event.preventDefault();

  emit("deleteTodo", id);
};

// function to toggle the filter
const onToggleFilter = () => {
  emit("toggleFilterBtn");
};

// function to mark all todo items as completed
const onMarkAllCompleted = () => {
  emit("handleAllDone");
};

// function to reset the todo list
const onResetTodoList = () => {
  emit("handleEmpty");
};
</script>

<style scoped>
/* Добавим анимацию для плавного появления и исчезновения */
.todo-fade-enter-active,
.todo-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.todo-fade-enter-from,
.todo-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.todo-fade-enter-to,
.todo-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
