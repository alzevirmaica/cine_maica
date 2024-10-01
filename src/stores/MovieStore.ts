import { API_token } from '@/config/key'
import type { IMovie } from '@/interfaces/IMovies'
import type { IMovieStoreState } from '@/interfaces/IMovieStoreState'
import axios from 'axios'
import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'

export const useMovieStore = defineStore('movieStore', () => {
  const state = reactive<IMovieStoreState>({
    movies: [],
    genres: [],
    favoritesMovies: JSON.parse(localStorage.getItem('favoriteMovies') || '[]'), // Carrega os filmes favoritos do localStorage
    searchMovie: '',
    searchGenres: '',
    showResults: false,
  })

  const searchMovie = () => {
    const apiUrlGet = `https://api.themoviedb.org/3/search/movie?query=${state.searchMovie}&include_adult=false&language=pt-BR`
    axios
      .get(apiUrlGet, {
        headers: {
          Authorization: `Bearer ${API_token}`
        }
      })
      .then((response) => {
        state.showResults = true;
        const allMovies = response.data.results;
  
        // Filtra os filmes com base no gênero selecionado, se houver
        if (state.searchGenres) {
          state.movies = allMovies.filter((movie: { genre_ids: string | string[] }) =>
            movie.genre_ids.includes(state.searchGenres)
          );
        } else {
          state.movies = allMovies; // Se não houver gênero, retorna todos os filmes
        }
  
        // Limpa os campos de busca
        state.searchMovie = '';
        state.searchGenres = ''; // Opcional, mas pode ser bom limpar o gênero selecionado
      })
  }

  const getGenres = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=pt-BR`, {
        headers: {
          Authorization: `Bearer ${API_token}`,
        },
      });
      state.genres = response.data.genres; // Armazenando os gêneros na store
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const searchGenre =() => {
    const apiUrlGenre = `https://api.themoviedb.org/3/discover/movie?with_genres=${state.searchGenres}&include_adult=false&language=pt-BR`;
    axios
      .get(apiUrlGenre, {
        headers: {
          Authorization: `Bearer ${API_token}`,
        },
      })
      .then((response) => {
        (state.searchGenres = ""), (state.showResults = true);
        state.movies = response.data.results;
      });
  }

  const toggleFavorite = (movie: IMovie) => {
    const index = state.favoritesMovies.findIndex(favorite => favorite.id === movie.id);
    if (index !== -1) {
      // Remove o filme se já estiver nos favoritos
      state.favoritesMovies.splice(index, 1);
    } else {
      // Adiciona o filme aos favoritos
      state.favoritesMovies.push(movie);
    }

    saveFavorites(); // Salva no localStorage
  };


  const saveFavorites = () => {
    localStorage.setItem('favoriteMovies', JSON.stringify(state.favoritesMovies)); // Persistindo os favoritos
  }

   // Watch para persistir os favoritos sempre que houver uma alteração
   watch(() => state.favoritesMovies, saveFavorites);

  return {
    state,
    searchMovie,
    getGenres,
    searchGenre,
    toggleFavorite
  }
})
