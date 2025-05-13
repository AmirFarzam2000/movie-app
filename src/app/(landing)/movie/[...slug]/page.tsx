'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import LoadingSpinner from 'src/app/_components/loadingSpinner';
import { useMovie } from 'src/hooks/useMovie';
import { Play } from 'lucide-react';

const MoviePage = () => {
  const params = useParams();
  const { slug } = params;
  const productSlug = slug ? (Array.isArray(slug) ? slug[0] : slug) : '';
  const movieSlug = parseInt(productSlug.split('-')[0], 10);

  const { data: movie, isLoading, isError } = useMovie(Number(movieSlug));

  if (isLoading)
    return (
      <div className="py-10 flex items-center justify-center h-full">
        <LoadingSpinner />
      </div>
    );

  if (isError || !movie)
    return (
      <div className="text-center py-10 text-xl text-red-500">
        Error loading movie details
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 py-10">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 sm:p-10 text-white">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>

          {/* Movie Details Section */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{movie.title}</h1>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">{movie.overview}</p>

              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-white">Release Date:</span> {movie.release_date}
                </p>
                <p>
                  <span className="font-semibold text-white">Rating:</span> {movie.vote_average}/10
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
                <Play size={18} />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
