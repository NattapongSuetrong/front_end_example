<script setup>
    import { ref } from 'vue'
    const form = ref({
        id: -1,
        login: '',
        name: '',
        password: '',
        gender: '',
        age: null
    })
    const users = ref([
        {
            id: 1,
            login: 'user01',
            name: 'User 1',
            password: 'password',
            gender: 'male',
            age: 18
        },
        {
            id: 2,
            login: 'user02',
            name: 'User 2',
            password: 'password',
            gender: 'female',
            age: 40
        }
    ])
    let lastId = 3
    const showForm = ref(false)

    function handleSubmit(){
        if(form.value.id === -1){                           //Add new
            form.value.id = lastId
            users.value.push({...form.value})
            lastId++
        } else{                                             //Edit
            const index = users.value.findIndex((item) => item.id === form.value.id)
            users.value[index] = { ...form.value }
        }

        
        clearForm()
    }

    function clearForm(){
        form.value = {
            id: -1,
            login: '',
            name: '',
            password: '',
            gender: '',
            age: null
        }
    }

    function deleteUser(id){
        const filteredUsers = users.value.filter((item) => item.id !== id)
        users.value = filteredUsers

        // const index = users.value.findIndex((item) => item.id === id)
        // users.value.splice(index, 1)
    }

    function editUser(item){
        showForm.value = true
        form.value = { ...item }
    }

    function cancel(){
        clearForm()
        showForm.value = false
    }

    function addNew(){
        showForm.value = true
    }
</script>

<template>
    <div>
        <h1>User</h1>
        <button @click="addNew()" v-if="!showForm">Add new</button>
        <form @submit.prevent="handleSubmit()" v-if="showForm">
            <div>
                <label for="login">Login:</label> 
                <input type="text" id="login" v-model="form.login" required>
            </div>
            <div>
                <label for="Name">Name:</label>
                <input type="text" id="name" v-model="form.name" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="form.password" required>
            </div>
            <div>
                <label for="gender">Gender:</label>
                <select id="gender" v-model="form.gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label for="age">Age:</label>
                <input type="number" id="age" min=0 v-model="form.age" required>
            </div>
            <!-- <button type="submit" v-if="form.id === -1">Add</button>
            <button type="submit" v-if="form.id == -1">Update</button> <button type="reset">Cancel</button> -->
            <button type="submit" @click="handleSubmit()">{{ form.id === -1 ? 'Add' : 'Update' }}</button>
            <button @click="cancel()">Cancel</button>
        </form>

        <ul>
            <li v-for="item in users" :key="item.id">
                {{ item.login }} - {{ item.name }} ({{ item.gender }}, {{ item.age }} years old)
                <button @click="editUser(item)">Edit</button>
                <button @click="deleteUser(item.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>