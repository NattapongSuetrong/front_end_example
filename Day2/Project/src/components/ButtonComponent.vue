<script setup>
    import { ref } from 'vue'
    const num = ref(0)
                function inc(){
                    num.value ++
                }
</script>

<template>
    <div>
        <center>
            <button @click="inc()"> {{ num }} </button>
        </center>
    </div>
</template>

<style scoped>
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
        margin: 5px 0;
    }
    button:hover {
        background-color: #0056b3; /* สีพื้นหลังเมื่อเมาส์ชี้ */
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* เพิ่มเงาเมื่อเมาส์ชี้ */
    }
    button:active {
        background-color: #004494; /* สีพื้นหลังเมื่อคลิก */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* ลดเงาเมื่อคลิก */
    }
    div{
        width: 80%;
        background-color:rgb(247, 247, 247);
        margin: 30px auto;
        border-radius: 15px;
        padding: 5px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>