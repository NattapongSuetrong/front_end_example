<script setup>
    import { ref } from 'vue'
    const message = ref('Hello vue!')
</script>

<template>
    <div>{{ message }}</div>
</template>

<style scoped>
    div{
        font-size: 16pt;
        color: darkred;
    }
</style>