<template>
  <div id="todoList">
    <ul v-for="item in filteredToDoItems" :key="item.id">
      <li class="todo">
        <label>
          <input
            type="checkbox"
            class="color-blue-grey"
            v-model="item.completed"
            @click="handleToDoItemComplete(item)"
          />
          <span :class="{ completed: item.completed }"> {{ item.name }} </span>
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
        @click="handleTogleFilter"
        :class="{ disabled: filteredToDoItems.length === 0 || isAllCompleted }"
      >
        {{ showAll ? "Show Incomplete" : "Show All" }}
      </Button>
      <Button
        type="button"
        @click="handleAllDone"
        :class="{ disabled: filteredToDoItems.length === 0 || isAllCompleted }"
      >
        Mark all as complete
      </Button>
      <Button
        type="button"
        @click="handleEmpty"
        :class="{ disabled: filteredToDoItems.length === 0 }"
      >
        Reset Todo List
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ToDoItemInterface } from "~/models/ToDoItems/ToDoItem.interface";

defineProps<{
  ToDoItems: ToDoItemInterface[];
  filteredToDoItems: ToDoItemInterface[];
  isAllCompleted: Boolean;
  showAll: Boolean;
}>();

const emit = defineEmits<{
  (e: "toggleToDo", id: number): void;
  (e: "onDeleteTodos", id: number): void;
  (e: "onHandleAllDone"): void;
  (e: "onHandleEmpty"): void;
  (e: "onToggleFilterBtn"): void;
  (e: "onFilteredToDoItems"): void;
}>();

// function to comlete to do item
const handleToDoItemComplete = (item: ToDoItemInterface) => {
  emit("toggleToDo", item.id);
};

const handleToDoItemDelete = (event: any, id: number) => {
  event.preventDefault();
  emit("onDeleteTodos", id);
};

const handleTogleFilter = () => {
  emit("onToggleFilterBtn");
  emit("onFilteredToDoItems");
};

const handleAllDone = () => {
  emit("onHandleAllDone");
};

const handleEmpty = () => {
  emit("onHandleEmpty");
};
</script>
