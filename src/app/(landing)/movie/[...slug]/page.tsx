'use client'

import { useParams } from 'next/navigation';
import { useMovie } from 'src/hooks/useMovie';

const MoviePage = () => {
  const params = useParams();
  const { slug } = params;

  const productSlug = slug ? (Array.isArray(slug) ? slug[0] : slug) : '';
  const movieSlug = parseInt(productSlug.split("-")[0], 10);

  const { data: movie, isLoading, isError } = useMovie(Number(movieSlug));

  if (isLoading) return <div className="text-center py-10 text-xl">Loading...</div>;
  if (isError || !movie) return <div className="text-center py-10 text-xl text-red-500">Error loading movie details</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 h-auto rounded-lg shadow-xl mb-6 md:mb-0"
        />
        <div className="md:ml-6">
          <h1 className="text-3xl font-bold text-gray-800">{movie.title}</h1>
          <p className="mt-4 text-gray-600">{movie.overview}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <p className="text-sm text-gray-500">Release Date: {movie.release_date}</p>
            <p className="text-sm text-gray-500">Rating: {movie.vote_average}/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
