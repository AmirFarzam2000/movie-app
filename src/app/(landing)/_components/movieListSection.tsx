import { FC } from "react";
import MovieList from "./movieList";
import LoadingError from "../_components/loadingError";
import LoadingSpinner from "src/app/_components/loadingSpinner";
import { Movie } from "src/model/movie";

interface MovieListSectionProps {
  data: Movie[];
  isLoading: boolean;
  isError: boolean;
}

const MovieListSection: FC<MovieListSectionProps> = ({
  data,
  isLoading,
  isError,
}) => {
  return (
    <div>
      <LoadingError  isError={isError} />

      {isLoading ? (
        <LoadingSpinner /> 
      ) : (
        !isError && data && <MovieList movies={data} />
      )}
    </div>
  );
};

export default MovieListSection;
