import React from 'react';
import { motion } from 'framer-motion';

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export const BlogFilter = ({ categories, activeCategory, onSelect }: BlogFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              relative px-6 py-2 rounded-full text-base font-medium transition-all duration-300
              ${isActive ? 'bg-black text-white' : 'bg-transparent text-gray-500 hover:text-black'}
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
