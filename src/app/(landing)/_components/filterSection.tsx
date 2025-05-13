import { FC } from "react";
import GenreFilter from "./genreFilter";
import CategoryFilter from "./categoryFilter";

interface FilterSectionProps {
  genres: { id: number; name: string }[];
  selectedGenre: number;
  setSelectedGenre: React.Dispatch<React.SetStateAction<number>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSection: FC<FilterSectionProps> = ({
  genres,
  selectedGenre,
  setSelectedGenre,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className=" flex gap-4 mb-6">
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  );
};

export default FilterSection;
