// src/components/CategoryFilter.tsx
import React from 'react';

interface Props {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
  searchQuery: string;
  onSearch: (q: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
  searchQuery,
  onSearch,
}: Props) {
  return (
    <div className="sticky top-0 bg-white z-40 px-4 py-2 flex flex-col gap-2">
      <div className="overflow-x-auto flex space-x-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
              selected === cat
                ? 'bg-primary text-white'
                : 'bg-white text-black border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Search menu…"
          value={searchQuery}
          onChange={e => onSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="text-sm font-medium mt-1">
        Showing: <span className="font-bold">{selected}</span>
      </div>
    </div>
  );
}
