<script setup>
    import { useUserStore } from '@/stores/user';
    import { useloginStore } from '@/stores/login';
    import CurrentLogin from '../components/CurrentLogin.vue'
    const userStore = useUserStore()
    const loginStore = useloginStore()
</script>

<template>
    <div class="container">
        <h1>User Management</h1>
        <div v-if="loginStore.isLogin()">
            <CurrentLogin></CurrentLogin>
        </div>
        <button class="btn-primary" @click="userStore.addNew()" v-if="!userStore.showForm">Add new</button>
        <form @submit.prevent="userStore.handleSubmit()" v-if="userStore.showForm" class="form-container">
            <div class="form-group">
                <label for="login">Login:</label> 
                <input type="text" id="login" v-model="userStore.form.login" required>
            </div>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="userStore.form.name" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="userStore.form.password" required>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" v-model="userStore.form.gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" min="0" v-model="userStore.form.age" required>
            </div>
            <div class="form-actions">
                <button class="btn-primary" type="submit">{{ userStore.form.id === -1 ? 'Add' : 'Update' }}</button>
                <button class="btn-secondary" @click="userStore.cancel()" type="button">Cancel</button>
            </div>
        </form>

        <ul class="user-list">
            <li v-for="item in userStore.users" :key="item.id" class="user-item">
                <div class="user-info">
                    {{ item.login }} - {{ item.name }} ({{ item.gender }}, {{ item.age }} years old)
                </div>
                <div class="user-actions">
                    <button class="btn-secondary" @click="userStore.editUser(item)">Edit</button>
                    <button class="btn-danger" @click="userStore.deleteUser(item.id)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Container styling */
.container {
    max-width: 800px;
    margin: 90px auto 40px;
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

.user-info {
    flex: 1;
}

.user-actions {
    display: flex;
    gap: 10px; /* Adjust the gap between buttons if needed */
}
</style>
