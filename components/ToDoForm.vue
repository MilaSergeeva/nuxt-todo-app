<template>
  <div id="formContainer">
    <h1>ToDo List</h1>
    <form @submit.prevent="addTodos()">
      <label for="name" class="active">What to do?</label>
      <input v-model="addTodo" type="text" id="name" placeholder="new todo" />
      <Button type="submit"
        >Add ToDoo<i class="material-icons right"></i
      ></Button>
    </form>
  </div>
</template>

<script setup lang="ts">
const addTodo = ref("");
const emit = defineEmits<{ (e: "onAddTodos", todo: string): void }>();

const addTodos = () => {
  if (!addTodo.value.trim()) return;
  emit("onAddTodos", addTodo.value);

  console.log(addTodo.value);
  addTodo.value = "";
};
</script>
