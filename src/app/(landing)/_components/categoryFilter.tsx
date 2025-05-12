import React from "react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => (
  <div className="mb-6">
    <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">
      Filter by Category:
    </label>
    <select
      id="category"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-48"
    >
      {categories.map((cat) => (
        <option key={cat.value} value={cat.value}>
          {cat.label}
        </option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;
