<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="nav-container">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/favorites">Favoritos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #141414;
  background-image: url('/img/colagem-de-fundo-de-filme.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  width: 100%;
  height: 100%;
}
body::before {
  background-color: rgba(0, 0, 0, 0.68);
  content: '';
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
}

header {
  width: 100%;
  text-align: center;
}

header nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

header nav a {
  z-index: 2;
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
