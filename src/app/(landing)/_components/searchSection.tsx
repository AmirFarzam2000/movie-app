import { FC } from "react";
import SearchBar from "./searchBar";

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchSection: FC<SearchSectionProps> = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      {searchTerm && (
        <h2 className="text-xl font-semibold mb-4">
          Results for: "{searchTerm}"
        </h2>
      )}
    </div>
  );
};

export default SearchSection;
