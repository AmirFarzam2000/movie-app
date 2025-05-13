'use client'

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { movieApi } from "src/api/movie";
import SearchSection from "./_components/searchSection";
import FilterSection from "./_components/filterSection";
import MovieListSection from "./_components/movieListSection";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("popular");

  const genresQuery = useQuery({
    queryKey: ["genres"],
    queryFn: () => movieApi.getGenres().then((res) => res.data.genres),
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", selectedGenre, selectedCategory, searchTerm],
    queryFn: () =>
      movieApi
        .getFilteredMovies(selectedGenre, selectedCategory, searchTerm)
        .then((res) => res.data.results),
  });

  return (
    <main className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>

      <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <FilterSection
        genres={genresQuery.data || []}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <MovieListSection data={data} isLoading={isLoading} isError={isError} />
    </main>
  );
}
