<script setup>
    import { ref, computed } from 'vue'
    const weight = ref(1)
    const height = ref(160)
    const bmi = computed(() => weight.value / ((height.value / 100)**2))
</script>

<template>
    <div class="container">
        <h1>BMI Calculator</h1>
        <div class="input-group">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" v-model="height">
        </div>
        <div class="input-group">
            <label for="weight">Weight (kg):</label>
            <input type="number" id="weight" v-model="weight">
        </div>
        <div class="result">
            <p>BMI: {{ bmi.toFixed(2) }}</p>
        </div>
        <section v-if="bmi < 18.5" class="info underweight">
            BMI น้อยกว่า 18.5 - น้ำหนักต่ำกว่าเกณฑ์: บ่งบอกว่าน้ำหนักต่ำกว่าเกณฑ์ที่ถือว่าสมดุลสำหรับความสูง อาจเกี่ยวข้องกับความเสี่ยงต่อปัญหาสุขภาพบางอย่าง
        </section>
        <section v-else-if="bmi < 25" class="info normal">
            BMI ระหว่าง 18.5 ถึง 24.9 - น้ำหนักปกติ: ถือว่าอยู่ในเกณฑ์ที่ดีสำหรับสุขภาพ
        </section>
        <section v-else-if="bmi < 30" class="info overweight">
            BMI ระหว่าง 25 ถึง 29.9 - น้ำหนักเกิน: บ่งบอกว่ามีน้ำหนักเกินเกณฑ์ ซึ่งอาจเพิ่มความเสี่ยงต่อปัญหาสุขภาพเช่นโรคหัวใจและเบาหวาน
        </section>
        <section v-else class="info obese">
            BMI 30 ขึ้นไป - โรคอ้วน: บ่งบอกว่ามีน้ำหนักมากเกินไปอย่างมาก โดยมีความเสี่ยงสูงต่อการเกิดโรคเรื้อรังหลายชนิด
        </section>
        <section class="disclaimer">
            สำหรับการประเมินนี้ จำเป็นต้องพิจารณาค่า BMI ร่วมกับปัจจัยอื่น ๆ เช่น อายุ เพศ และสุขภาพโดยรวม แต่ละคน ตัวเลขที่ได้จากการคำนวณ BMI ควรใช้เป็นเครื่องมือหนึ่งในการประเมินสุขภาพร่วมกับการวิเคราะห์อื่นๆ.
        </section>
    </div>
</template>

<style scoped>
.container {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Kanit', sans-serif;
}

h1 {
    text-align: center;
    color: #333;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
}

.result {
    text-align: center;
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
}

.info {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #fff;
}

.underweight {
    background-color: #f0ad4e;
}

.normal {
    background-color: #5cb85c;
}

.overweight {
    background-color: #f0ad4e;
}

.obese {
    background-color: #d9534f;
}

.disclaimer {
    background-color: #f7f7f7;
    color: #333;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 14px;
}
</style>
