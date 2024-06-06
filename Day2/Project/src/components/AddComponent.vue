<script setup>
    import { ref } from 'vue'
    const num1 = ref(0)
                const num2 = ref(0)
                const result = ref(0)
                function add(){
                    result.value = num1.value + num2.value
                }
</script>

<template>
    <div>
        <div class="container">
            <input type="number" v-model="num1"> 
            + 
            <input type="text" v-model.number="num2">
            <button @click="add()">Calculate</button>
            <div>{{ result }}</div>
        </div>
    </div>
    
</template>

<style scoped>
    .container{
        width: 800px;
        background-color:rgb(247, 247, 247);
        margin: 10px auto 20px ;
        border-radius: 15px;
        padding: 20px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        color:black;
        font-family: 'Kanit';
        font-size: 16pt;
    }
    button {
        background-color: #007bff; /* สีพื้นหลังปุ่ม */
        color: #fff; /* สีข้อความ */
        padding: 10px 20px; /* ระยะห่างด้านในปุ่ม */
        border: none; /* ไม่มีเส้นขอบ */
        border-radius: 25px; /* ทำให้มุมมน */
        font-size: 16px; /* ขนาดตัวอักษร */
        cursor: pointer; /* เปลี่ยนเคอร์เซอร์เมื่อวางเมาส์เหนือปุ่ม */
        transition: background-color 0.3s ease, box-shadow 0.3s ease; /* เพิ่มเอฟเฟกต์ทรานซิชัน */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* เพิ่มเงา */
        margin: 5px 3%;
    }
    button:hover {
        background-color: #0056b3; /* สีพื้นหลังเมื่อเมาส์ชี้ */
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* เพิ่มเงาเมื่อเมาส์ชี้ */
    }
    button:active {
        background-color: #004494; /* สีพื้นหลังเมื่อคลิก */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* ลดเงาเมื่อคลิก */
    }
    input{
    font-size: 16pt;
    width: 30%;
}
</style>