<script setup>
    import {ref} from 'vue'
    const todoList = ref([{
    id:1,
    text: 'Work1',
    status: true
    }, 
    {
        id:2,
        text: 'Work2',
        status: true
    }])

    let lastId = 3
    const todo = ref('')
    function addTodo(){
        todoList.value.push({
            id: lastId,
            text: todo.value,
            status: true
        })
        lastId ++
        todo.value = ''
    }

    function done(index){
        todoList.value[index].status  = !todoList.value[index].status
    }

    function del(index){
        todoList.value.splice(index, 1)
    }
</script>

<template>
    <div>
        <input type="text" v-model="todo"> <button @click="addTodo()">Add Todo</button>
        <ul>
            <li v-for="(item, index) in todoList" :key="index" :class="{finished: !item.status}">
                <div @click="done(index)">
                    {{ index }} {{ item.id }}.{{ item.text }} {{ item.status }}
                </div>
                <button @click="del(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .finished{
        text-decoration: line-through;
    }
</style>