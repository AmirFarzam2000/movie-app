// src/api/movie.ts
import api from "./api";

export const movieApi = {
  getGenres: () => api.get("/genre/movie/list?language=en"),

  getFilteredMovies: (genreId?: number, category: string = "popular", searchTerm?: string) => {
    const params = new URLSearchParams();
  
    if (searchTerm) {
      params.append("query", searchTerm);
      return api.get(`/search/movie?${params.toString()}`);
    }
  
    if (genreId && genreId !== 0) {
      params.append("with_genres", genreId.toString());
    }
  
    params.append("sort_by", category === "top_rated" ? "vote_average.desc" : "popularity.desc");
  
    return api.get(`/discover/movie?${params.toString()}`);
  },
  getMovieById: (id: string | number) => api.get(`/movie/${id}?language=en`),

  
};
