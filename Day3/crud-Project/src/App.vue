<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/user">User</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* Reset body margin and padding */
body {
  margin: 0;
  padding: 0;
  font-family: 'Kanit', sans-serif;
}

/* Header styling */
header {
  background-color: #333;
  color: white;
  padding: 10px 0;
  font-family: 'Kanit', sans-serif;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

/* Navigation styling */
.wrapper {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  margin: 5px 10px;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  background-color: #555;
}

nav a:hover {
  background-color: #007bff;
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: #555;
}

nav a:first-of-type {
  border-left: 0;
}

nav a {
  font-size: 16px;
}
</style>
