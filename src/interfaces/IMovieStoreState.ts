import type { IGenre } from "./IGenre";
import type { IMovie } from "./IMovies";

export interface IMovieStoreState {
    movies: IMovie[]
    genres: IGenre[]
    searchMovie: string
    searchGenres: string
    showResults: boolean
}