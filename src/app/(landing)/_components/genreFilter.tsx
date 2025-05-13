import React from "react";

interface GenreFilterProps {
  genres: { id: number; name: string }[];
  selectedGenre: number;
  onGenreChange: (genreId: number) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genres, selectedGenre, onGenreChange }) => (
  <div className="mb-6">
    <label htmlFor="genre" className="block text-lg font-semibold text-gray-700 mb-2">
      Filter by Genre:
    </label>
    <select
      id="genre"
      value={selectedGenre}
      onChange={(e) => onGenreChange(Number(e.target.value))}
      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-48"
    >
      <option value={0} className="text-gray-500">
        All Genres
      </option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  </div>
);

export default GenreFilter;
