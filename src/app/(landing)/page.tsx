'use client'

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { movieApi } from "src/api/movie";
import MovieList from "./_components/movieList";
import SearchBar from "./_components/searchBar";
import LoadingError from "./_components/loadingError";
import LoadingSpinner from "../_components/loadingSpinner";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["popularMovies", searchTerm],
    queryFn: () =>
      movieApi
        .getPopularMovies(searchTerm)
        .then((res) => res.data.results),
    enabled: true, // Always enabled to update the results based on search term
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>

      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

      {searchTerm && (
        <h2 className="text-xl font-semibold mb-4">
          Results for: "{searchTerm}"
        </h2>
      )}

      {/* Use the loading spinner */}
      <LoadingError isLoading={isLoading} isError={isError} />

      {isLoading ? (
        <LoadingSpinner /> // Show spinner while loading
      ) : (
        !isError && data && <MovieList movies={data} />
      )}
    </main>
  );
}
