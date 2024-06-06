<script setup lang="ts">
    import { ref } from 'vue'
    const grade = ref('D')
    const score = ref(0)

    const  cal = ()=> {
        if(score.value >= 80){
            grade.value = 'A'
        }
        else if(score.value >= 70 && score.value < 80){
            grade.value = 'B'
        }
        else if(score.value >= 60 && score.value < 70){
            grade.value = 'C'
        }
        else if(score.value >= 50 && score.value < 60){
            grade.value = 'D'
        }
        else{
            grade.value = 'F'
        }
    }
</script>

<template>
    <div>
        <input type="number" v-model="score">
        <button @click="cal()">Calculate</button>
        {{ grade }}
    </div>
</template>

<style scoped></style>