<script setup>
  import HelloComponent from './components/HelloComponent.vue'
  import EchoComponent from './components/EchoComponent.vue'
  import ButtonComponent from './components/ButtonComponent.vue'
  import AddComponent from './components/AddComponent.vue'
  import lightComponent from './components/lightComponent.vue'
  import GradeComponent from './components/GradeComponent.vue'
  import pricePerUnitComponent from './components/pricePerUnitComponent.vue'
</script>

<template>
  <div class="box">
    <center>
      <HelloComponent></HelloComponent>
      <EchoComponent></EchoComponent>
      <ButtonComponent></ButtonComponent>
      
    </center>
    <AddComponent></AddComponent>
    <center>
      <lightComponent></lightComponent>
    </center>
   
  </div> <br>
  <div class="box">
    <GradeComponent></GradeComponent>
  </div> <br>
  <div class="box">
    <pricePerUnitComponent></pricePerUnitComponent>
  </div>
</template>

<style scoped>
  .box{
    background-color:antiquewhite;
    padding: 2%;
    width: 1200px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 3%;
    color: black;
  }

</style>
