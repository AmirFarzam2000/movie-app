import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
}

const MovieCard = ({ id, title, posterPath }: MovieCardProps) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="bg-white p-4 rounded-md shadow-lg flex flex-col">
      <Image
  src={posterUrl}
  alt={title}
  width={300}
  height={400}
  unoptimized
  className="rounded-md object-cover"
/>

      <div className="flex-1 mt-2">
        <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">{title}</h3>
      </div>
      <Link href={`/movie/${id}-${title.replace(/\s+/g, "-").toLowerCase()}`} className="text-blue-500 mt-2 block">
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
