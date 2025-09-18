<template>
  <div>
    <div class="movies">
      <p style="color: beige" v-if="favoriteMovies.length === 0">Nenhum filme favorito ainda.</p>
      <div v-for="movie in favoriteMovies" :key="movie.id" class="card">
        <img
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
          <button class="remove-favorites" @click="removeFromFavorites(movie)">
            <span>Remover dos favoritos</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '../stores/MovieStore'
import { computed } from 'vue'
import { extractYear } from '../composables/extractYear'
import type { IMovie } from '../interfaces/IMovies'

const movieStore = useMovieStore()
const favoriteMovies = computed(() => movieStore.state.favoritesMovies)

function removeFromFavorites(movie: IMovie) {
  movieStore.toggleFavorite(movie)
}
</script>

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
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  color: white;
}

p {
  display: flex;
  align-self: center;
  gap: 4px;
}

.card:hover {
  transform: scale(1.3);
  z-index: 99;
  cursor: pointer;
}

.remove-favorites {
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 5px;
}

.remove-favorites:hover {
  background-color: darkgrey;
}
</style>
