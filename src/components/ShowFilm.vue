<script setup lang="ts">
import { useMovieStore } from '../stores/MovieStore'
import { computed, defineEmits } from 'vue'
import { extractYear } from '../composables/extractYear'
import type { IMovie } from '../interfaces/IMovies'

const movieStore = useMovieStore()
const movies = computed(() => movieStore.state.movies)
const emit = defineEmits<{
  (event: 'show-details', movie: IMovie): void
}>()

function showMovieDetails(movie: IMovie) {
  emit('show-details', movie)
}

function toggleFavorite(movie: IMovie) {
  movieStore.toggleFavorite(movie)
}
</script>

<template>
  <div class="movies">
    <div :key="index" v-for="(movie, index) in movies" class="card">
      <img
        @click="showMovieDetails(movie)"
        :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        alt="Poster"
        class="card-image"
      />
      <div>
        <h2 class="card-title" style="color: white">{{ movie.title }}</h2>
        <p style="color: white">{{ extractYear(movie.release_date) }}</p>
        <p style="color: white">
          <img class="card-icon" src="/img/estrela.png" alt="ícone de estrela" height="15px" />
          {{ movie.vote_average.toFixed(1) }}
        </p>
        <button class="card-favorites" @click="toggleFavorite(movie)">
          {{
            movieStore.state.favoritesMovies.some((fav) => fav.id === movie.id)
              ? 'Remover dos Favoritos'
              : 'Adicionar aos Favoritos'
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movies {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  max-width: 400px;
  transition: all 0.2s ease-in-out;
  z-index: 9;
  box-shadow: 0 0px 9px 3px rgb(255, 255, 255, 0.23);
  background-color: #141414;
}

.card-image {
  width: 150px;
  height: auto;
  margin-right: 20px;
  cursor: pointer;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  color: white;
}

.card-favorites {
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
}

.card-favorites:hover {
  background-color: darkgrey;
}

p {
  display: flex;
  align-self: center;
  gap: 4px;
}

.card:hover {
  transform: scale(1.3);
  z-index: 99;
}
</style>
