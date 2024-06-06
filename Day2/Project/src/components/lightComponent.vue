<script setup>
    import { ref } from 'vue'
    const status = ref('true')
        function turn(){
            status.value = !status.value
    }
</script>

<template>
    <div>
        <div v-bind:class="{light: true, on: status, off: !status}" @click="turn()"></div>
    </div>
</template>

<style scoped>
    .light{
        border-radius: 50%;
        border-width: 5px;
        border-color: #333;
        border-style: solid;
        width: 100px;
        height: 100px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
        
    .on{
        background-color: yellow;
    }
        
    .off{
        background-color:#333;
    }
</style>