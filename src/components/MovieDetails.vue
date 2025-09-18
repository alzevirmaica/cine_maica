<script setup lang="ts">
import { defineEmits } from 'vue'
import { extractYear } from '../composables/extractYear'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['details-click'])
</script>

<template>
  <div>
    <section v-if="movie" class="movie-details" @click="emit('details-click')">
      <div class="movie-card">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          alt="Poster"
          class="movie-image"
        />
        <div>
          <div class="movie-line">
            <p style="color: white">
              <img class="card-icon" src="/img/estrela.png" alt="ícone de estrela" height="15px" />
              {{ movie.vote_average.toFixed(1) }}
            </p>
            <h2 class="movie-title" style="color: white">
              {{ movie.title }}
            </h2>
            <p class="movie-year" style="color: white">
              {{ extractYear(movie.release_date) }}
            </p>
          </div>
          <p class="movie-overview" style="color: white">
            {{ movie.overview }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.movie-details {
  margin-top: -20px;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  width: 100%; /* Garante que a seção ocupe 100% da largura */
  height: 400px; /* Garante que a seção ocupe 100% da altura da viewport */
  position: relative; /* Garante que a posição relativa seja aplicada corretamente */
}
.movie-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  width: 100%;
  max-width: 500px;
  height: 500px;
  transition: all 0.2s ease-in-out;
  z-index: 9;
  box-shadow: 0 0px 9px 3px rgb(255, 255, 255, 0.23);
  background-color: #141414;
  transition: all 0.2s ease-in-out;
  overflow: hidden; /* Previne overflow de conteúdo */
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
  font-size: 1rem;
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
