import api from "./api";

export const movieApi = {
  getPopularMovies: (searchTerm: string = "") => {
    const endpoint = searchTerm
      ? `/search/movie?query=${encodeURIComponent(searchTerm)}`
      : "/movie/popular";
    return api.get(endpoint);
  },

  getMovieById: (id: string | number, language = "en-US") =>
    api.get(`/movie/${id}?language=${language}`),
  
};
