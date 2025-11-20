import React from 'react';
import { CategoryType } from '../types';

interface CategoryNavProps {
  selectedCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  showFavorites: boolean;
  onToggleFavorites: () => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  selectedCategory, 
  onSelectCategory,
  showFavorites,
  onToggleFavorites
}) => {
  const categories = Object.values(CategoryType);

  return (
    <div className="sticky top-0 z-40 w-full border-b border-white/20 bg-white/70 shadow-sm backdrop-blur-xl transition-all">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Scrollable Categories */}
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pr-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                 // When clicking a category, ensure favorites mode is off to show results
                 if(showFavorites) onToggleFavorites();
                 onSelectCategory(cat);
              }}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat && !showFavorites
                  ? 'bg-slate-800 text-white shadow-md scale-105'
                  : 'bg-white/40 text-slate-600 hover:bg-white/80 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-2 h-6 w-px bg-slate-300/50"></div>

        {/* Favorites Toggle */}
        <button
          onClick={onToggleFavorites}
          className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-bold transition-all duration-200 ${
            showFavorites
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-white/40 text-slate-600 hover:bg-white/80 hover:text-red-500'
          }`}
        >
          我的收藏
        </button>
      </div>
    </div>
  );
};

export default CategoryNav;