<script setup>
    import { ref } from 'vue'
    const form = ref({
        login: '',
        password: ''
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
    const message = ref('')
    const error = ref('')
    const currentUser = ref(null)

    function cancel(){
        form.value = {
            login: '',
            password: ''
        }
        message.value = ''
        error.value = ''
    }

    function handleSubmit(){
        const loginUser = users.value.find((item) => item.login === form.value.login)
        if (!loginUser) {
            message.value = ''
            error.value = 'Not found!!!'
            return console.log('Not found!!!')
        }
        if (loginUser.password === form.value.password){
            error.value = ''
            message.value = 'Login Sucess'
            console.log('Login Sucess')
            currentUser.value = loginUser
        } else{
            message.value = ''
            error.value = 'Login fail!!!'
            console.log('Login fail!!!')
        }
    }

    function logout(){
        currentUser.value = null
    }

    function isLogin(){
        return currentUser.value !== null
    }
</script>

<template>
    <div class="container">
        <h1>Login</h1>
        
        <div v-if="isLogin()">
           <div class="form-group">
                {{ currentUser.login }} is login
            </div>
            <div class="form-actions">
                <button class="btn-secondary" @click="logout()">Logout</button>
            </div> 
        </div>
        
        

        <form @submit.prevent="handleSubmit()" class="form-container" v-if="!isLogin()">
            <div class="form-group">
                <label for="login">Login:</label> 
                <input type="text" id="login" v-model="form.login" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="form.password" required>
            </div>
            <div class="form-actions">
                <!-- <button class="btn-primary" type="submit">{{ form.id === -1 ? 'Add' : 'Update' }}</button> -->
                <button class="btn-primary" type="submit">Login</button>
                <button class="btn-secondary" @click="cancel()" type="button">Cancel</button>
            </div>
            <div v-if="message !== ''" style="color: green; font-size: 10pt;">{{ message }}</div>
            <div v-if="error !== ''" style="color: red; font-size: 10pt;">{{ error }}</div>
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
