<script setup>
    import { useloginStore } from '@/stores/login';
    import CurrentLogin from '../components/CurrentLogin.vue'
    const loginStore = useloginStore()
</script>

<template>
    <div class="container">
        <h1>Login</h1>
        <div v-if="loginStore.isLogin()">
           <CurrentLogin></CurrentLogin>
            <div class="form-actions">
                <button class="btn-secondary" @click="loginStore.logout()">Logout</button>
            </div> 
        </div>     

        <form @submit.prevent="loginStore.handleSubmit()" class="form-container" v-if="!loginStore.isLogin()">
            <div class="form-group">
                <label for="login">Login:</label> 
                <input type="text" id="login" v-model="loginStore.form.login" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="loginStore.form.password" required>
            </div>
            <div class="form-actions">
                <!-- <button class="btn-primary" type="submit">{{ form.id === -1 ? 'Add' : 'Update' }}</button> -->
                <button class="btn-primary" type="submit">Login</button>
                <button class="btn-secondary" @click="loginStore.cancel()" type="button">Cancel</button>
            </div>
            <div v-if="loginStore.message !== ''" style="color: green; font-size: 10pt;">{{ loginStore.message }}</div>
            <div v-if="loginStore.error !== ''" style="color: red; font-size: 10pt;">{{ loginStore.error }}</div>
        </form>
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
</style>
