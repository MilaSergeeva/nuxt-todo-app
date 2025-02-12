<template>
  <div id="formContainer">
    <h1>Todo List</h1>
    <form @submit.prevent="onAddTodo()">
      <label for="name" class="active">What to do?</label>
      <input v-model="addTodo" type="text" id="name" placeholder="new todo" />
      <Button type="submit">Add<i class="material-icons right">send</i></Button>
    </form>
  </div>
</template>

<script setup lang="ts">
const addTodo = ref<string>("");
const emit = defineEmits<{
  (e: "addTodo", todo: string): void;
}>();

const onAddTodo = () => {
  if (!addTodo.value.trim()) return;

  emit("addTodo", addTodo.value);

  addTodo.value = "";
};
</script>
