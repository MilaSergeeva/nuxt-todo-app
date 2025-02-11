<template>
  <div id="todoList">
    <ul v-for="item in toDoItems" :key="item.id">
      <li v-if="showAll || (!showAll && !item.completed)" class="todo">
        <label>
          <input
            type="checkbox"
            class="color-blue-grey"
            v-model="item.completed"
            @click="handleToDoItemComplete(item)"
          />
          <span :class="{ completed: item.completed }">{{ item.name }}</span>
          <i
            class="material-icons color-blue-grey"
            @click="handleToDoItemDelete($event, item.id)"
            >delete</i
          >
        </label>
      </li>
    </ul>
    <div>
      <Button
        type="button"
        @click="handleToggleFilter"
        :class="{ disabled: toDoItems.length === 0 || areAllCompleted }"
      >
        {{ showAll ? "Show Incomplete" : "Show All" }}
      </Button>
      <Button
        type="button"
        @click="handleAllDone"
        :class="{ disabled: toDoItems.length === 0 || areAllCompleted }"
      >
        Mark all as complete
      </Button>
      <Button
        type="button"
        @click="handleEmpty"
        :class="{ disabled: toDoItems.length === 0 }"
      >
        Reset Todo List
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ToDoItemInterface } from "~/models/ToDoItems/ToDoItem.interface";

defineProps<{
  toDoItems: ToDoItemInterface[];
  areAllCompleted: Boolean;
  showAll: Boolean;
}>();

const emit = defineEmits<{
  (e: "toggleToDo", id: number): void;
  (e: "onDeleteTodos", id: number): void;
  (e: "onHandleAllDone"): void;
  (e: "onHandleEmpty"): void;
  (e: "onToggleFilterBtn"): void;
}>();

// function to comlete to do item
const handleToDoItemComplete = (item: ToDoItemInterface) => {
  emit("toggleToDo", item.id);
};

const handleToDoItemDelete = (event: any, id: number) => {
  event.preventDefault();

  emit("onDeleteTodos", id);
};

const handleToggleFilter = () => {
  emit("onToggleFilterBtn");
};

const handleAllDone = () => {
  emit("onHandleAllDone");
};

const handleEmpty = () => {
  emit("onHandleEmpty");
};
</script>
