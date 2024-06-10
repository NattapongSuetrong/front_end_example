<script setup>
import { ref } from 'vue'
import axios from 'axios';

const num1 = ref(0)
const num2 = ref(0)
const result = ref(0)

async function plus(){
    // result.value = parseFloat(num1.value) + parseFloat(num2.value)
    // axios.get('http://localhost:3000', {      // ?num1=10&num2=1
    //     params :{
    //         num1: num1.value,
    //         num2: num2.value
    //     }
    // }).then(function (response){
    //     console.log(response.data)
    //     result.value = response.data
    // }).catch(function (error) {
    //     console.log(error)
    // })
    try{
        const response = await axios.get('http://localhost:3000', {      // ?num1=10&num2=1
            params :{
                num1: num1.value,
                num2: num2.value
            }
        })
        console.log(response.data)
        result.value = response.data
    } catch (error) {
        console.log(error)
    }
    console.log('Finish plush')
}
</script>

<template>
    <div class="container">
        <h1>Plush View</h1>
        <div class="input-container">
            <input type="number" v-model="num1" class="input-number"> 
            <span>+</span> 
            <input type="number" v-model="num2" class="input-number"> 
            <button @click="plus()" class="btn-primary">=</button> 
            <span class="result">{{ result }}</span>
        </div>
    </div>
</template>

<style scoped>
/* Container styling */
.container {
    max-width: 600px;
    margin: 90px auto 40px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f4f4f4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    text-align: center;
}

/* Title styling */
h1 {
    color: #333;
    margin-bottom: 20px;
}

/* Input container styling */
.input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
}

/* Input styling */
.input-number {
    width: 160px;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
}

/* Button styling */
.btn-primary {
    width: 60px;
    padding: 10px 20px;
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

/* Result styling */
.result {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-left: 10px;
}
</style>
