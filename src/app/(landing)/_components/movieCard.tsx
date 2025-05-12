import Link from 'next/link';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
}

const MovieCard = ({ id, title, posterPath }: MovieCardProps) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <Link href={`/movie/${id}-${title.replace(/\s+/g, "-").toLowerCase()}`} className="text-blue-500 mt-2 block">
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
