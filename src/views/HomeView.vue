<script setup lang="ts">
import ShowFilm from '@/components/ShowFilm.vue';
import { useMovieStore } from '@/stores/MovieStore';
import { ref } from 'vue';



const movieStore = useMovieStore()
const searchQuery = ref('')
const showResults = ref(false); 


const handleSearch = () => {
  movieStore.state.searchMovie = searchQuery.value
  movieStore.searchMovie()
  showResults.value = true; 
}
</script>

<template>
  <div id="bestMovies">
    <header class="header-movies">
      <div class="container">
        <h1 class="header-movies__title">CineBagual</h1>
      </div>
    </header>
    <section class="section-movies">
      <div class="container">
        <div v-if="!showResults" class="app-movies">
          <h2 class="app-movies__title">Filmes, séries e muito mais. Sem limites.</h2>

          <div class="form">
            <input  v-model="searchQuery" type="text" placeholder="Buscar filme" name="movie" class="form__input" />
            <select name="genres" id="genres">
              <option value="" selected disabled>Gênero</option>
            </select>
            <input type="submit" class="form__submit" value="Buscar" @click.prevent="handleSearch" />
          </div>
        </div>
        <show-film />
      </div>
    </section>

  </div>
</template> 

<style scoped>
.header-movies {
  float: left;
  position: relative;
  padding: 15px 0;
  width: 100%;
  z-index: 9;
}

.header-movies__title {
  color: red;
  font-family: 'arial', sans-serif;
  font-size: 40px;
  text-shadow: 2px 2px #000000;
}

.section-movies {
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
  width: 100%;
}
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}
.app-movies {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 60px 0;
  z-index: 9;
}
.app-movies__title {
  color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 54px;
  max-width: 70%;
  text-align: center;
}
.app-movies__subtitle {
  color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 25px;
  font-weight: 300;
  margin: 20px 0 30px;
}
.app-movies__msg {
  color: white;
  font-size: 18px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 20px;
}

.form {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5px;
}
.form__input {
  border: 0;
  background-color: #fff;
  border-radius: 0;
  padding: 15px 20px;
  width: 35%;
  border-radius: 4px;
}
.form__submit {
  background-color: #e50914;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-size: 25px;
  padding: 15px 30px;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
}

#genres {
  border-radius: 4px;
  max-width: 100px;
  width: 100%;
}
.form__submit:hover {
  background-color: #c70913;
}

@media only screen and (max-width: 480px) {
  .app-movies {
    margin: 30px 0;
  }

  .header-movies__title {
    text-align: center;
  }

  .app-movies__title {
    font-size: 40px;
    max-width: 100%;
  }

  .app-movies__subtitle {
    text-align: center;
  }

  .app-movies__msg {
    text-align: center;
  }

  .form {
    overflow: hidden;
    flex-direction: column;
  }

  .form__input {
    width: 100%;
    margin-bottom: 5px;
  }

  .form__submit {
    font-size: 16px;
  }

  .app-movies-all {
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, 47%);
  }

  .app-movies-all__figure {
    height: 190px;
  }
}

.movies {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.movie-details {
  position: relative;
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
