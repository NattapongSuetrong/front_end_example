<script setup>
    import { ref, computed } from 'vue'
    const price = ref(0)
    const unit = ref(0)
    const total = ref(0)

    function mul(){
        total.value = price.value * unit.value
    }

    function mul2(){
        return price.value * unit.value
    }

    const total2 = computed(mul2)
    const total3 = computed(function (){
        return price.value * unit.value
    })
    const total4 = computed(() =>{
        return price.value * unit.value
    })
    const total5 = computed(() => price.value * unit.value
    )
</script>

<template>
    <div>
        Price:
        <input type="number" v-model="price">
        Unit:
        <input type="number" v-model="unit">
        <button @click="mul()">Calculate</button>
        <p>Total: {{ total }}</p>
        <p>Total2: {{ total2 }}</p>
        <p>Total3: {{ total3 }}</p>
        <p>Total4: {{ total4 }}</p>
        <p>Total5: {{ total5 }}</p>
    </div>
</template>
