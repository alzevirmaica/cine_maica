<script setup lang="ts">
import { useMovieStore } from '@/stores/MovieStore'
import { computed } from 'vue'

const movieStore = useMovieStore()
const movies = computed(() => movieStore.state.movies) // Computa os filmes da store

const extractYear = (dateString: string): string => {
  return dateString.split('-')[0]
}
</script>

<template>
  <div class="movies">
    <div :key="index" v-for="(movie, index) in movies" class="card">
      <img
        :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        alt="Poster"
        class="card-image"
      />
      <div>
        <h2 class="card-title" style="color: white">{{ movie.title }}</h2>
        <p style="color: white">{{ extractYear(movie.release_date) }}</p>
        <p style="color: white">
          <img
            class="card-icon"
            src="../../../public/img/estrela.png"
            alt="ícone de estrela"
            height="15px"
          />
          {{ movie.vote_average.toFixed(1) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.movies {
  position: relative;
  z-index: 2;
}
</style>
