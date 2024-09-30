import { API_token } from '@/config/key'
import type { IMovieStoreState } from '@/interfaces/IMovieStoreState'
import axios from 'axios'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useMovieStore = defineStore('movieStore', () => {
  const state = reactive<IMovieStoreState>({
    movies: [],
    searchMovie: ''
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
        state.searchMovie = ''
        state.movies = response.data.results
      })
  }

  return {
    state,
    searchMovie
  }
})
