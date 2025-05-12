import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => (
  <div className="mb-6 flex items-center justify-center">
    <input
      type="text"
      placeholder="Search by movie title..."
      className="w-full sm:w-1/2 p-2 border rounded-md shadow-sm focus:outline-none"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export default SearchBar;
