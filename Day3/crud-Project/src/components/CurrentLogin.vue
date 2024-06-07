<script setup>
    import { useloginStore } from '@/stores/login';
    const loginStore = useloginStore()
</script>

<template>
    <div v-if="loginStore.isLogin()">
        <div class="form-group">
            {{ loginStore.currentUser.login }} is login
        </div>
    </div>
</template>

<style scoped>
    .form-group {
    margin-bottom: 15px;
}
</style>