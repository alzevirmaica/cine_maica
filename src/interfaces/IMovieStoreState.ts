import type { IMovie } from "./IMovies";

export interface IMovieStoreState {
    movies: IMovie[];
    searchMovie: string
}