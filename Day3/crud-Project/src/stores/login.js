import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useloginStore = defineStore('login', () => {
    const userStore = useUserStore()
    const form = ref({
        login: '',
        password: ''
    })
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
        const loginUser = userStore.users.find((item) => item.login === form.value.login)
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

  return { form, message, error, currentUser, cancel, handleSubmit, logout, isLogin }
})
