<script setup>
    import {ref, computed} from 'vue'
    const todoList = ref(['Work1', 'Work2'])
    const todo = ref('')
    function addTodo(){
        todoList.value.push(todo.value)
        todo.value = ''
    }
</script>

<template>
    <div>
        <input type="text" v-model="todo"> <button @click="addTodo()">Add Todo</button>
        <ul>
            <li v-for="(item, index) in todoList" :key="index">{{ index }} {{ item }}</li>
        </ul>
    </div>
</template>