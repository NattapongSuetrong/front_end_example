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
    <div class="container">
        <h1>User Management</h1>
        <button class="btn-primary" @click="addNew()" v-if="!showForm">Add new</button>
        <form @submit.prevent="handleSubmit()" v-if="showForm" class="form-container">
            <div class="form-group">
                <label for="login">Login:</label> 
                <input type="text" id="login" v-model="form.login" required>
            </div>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="form.password" required>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" v-model="form.gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" min="0" v-model="form.age" required>
            </div>
            <div class="form-actions">
                <button class="btn-primary" type="submit">{{ form.id === -1 ? 'Add' : 'Update' }}</button>
                <button class="btn-secondary" @click="cancel()" type="button">Cancel</button>
            </div>
        </form>

        <ul class="user-list">
            <li v-for="item in users" :key="item.id" class="user-item">
                {{ item.login }} - {{ item.name }} ({{ item.gender }}, {{ item.age }} years old)
                <button class="btn-secondary" @click="editUser(item)">Edit</button>
                <button class="btn-danger" @click="deleteUser(item.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Container styling */
.container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f4f4f4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
}

/* Title styling */
h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

/* Button styling */
.btn-primary {
    display: inline-block;
    padding: 10px 20px;
    margin-bottom: 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.btn-secondary {
    padding: 10px 20px;
    background-color: #6c757d;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-secondary:hover {
    background-color: #5a6268;
}

.btn-danger {
    padding: 10px 20px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-danger:hover {
    background-color: #c82333;
}

/* Form styling */
.form-container {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
}

.form-actions {
    display: flex;
    justify-content: space-between;
}

/* User list styling */
.user-list {
    list-style-type: none;
    padding: 0;
}

.user-item {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
