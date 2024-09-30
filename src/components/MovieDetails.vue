<script setup lang="ts">

</script>

<template>
  <div>
    
  </div>
</template>

<style scoped>
.movies {
  position: relative;
  z-index: 2;
}
.movie-details {
  position: relative;
}
.movie-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  max-width: 600px;
  height: 600px;
  transition: all 0.2s ease-in-out;
  z-index: 9;
  box-shadow: 0 0px 9px 3px rgb(255, 255, 255, 0.23);
  background-color: #141414;
  overflow: auto;
}

.movie-image {
  width: 60%;
  height: 60%;
  object-fit: contain;
}

.movie-title {
  font-size: 1.1em;
  font-weight: bold;
  color: white;
}

.movie-overview {
  font-size: 1.1em;
  text-align: center;
}

.movie-line {
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.movie-card:hover {
  transform: scale(1.3);
  z-index: 99;
}
</style>
