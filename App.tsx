import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import ToolCard from './components/ToolCard';
import Footer from './components/Footer';
import { ALL_TOOLS } from './constants';
import { CategoryType, FilterState } from './types';

const App: React.FC = () => {
  const [filter, setFilter] = useState<FilterState>({
    search: '',
    category: CategoryType.ALL,
    favoritesOnly: false,
  });

  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('ai-nav-favorites');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem('ai-nav-favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    const newFavs = new Set(favorites);
    if (newFavs.has(id)) newFavs.delete(id);
    else newFavs.add(id);
    setFavorites(newFavs);
  };

  const filteredTools = useMemo(() => {
    return ALL_TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(filter.search.toLowerCase()) || 
                          tool.description.toLowerCase().includes(filter.search.toLowerCase()) ||
                          tool.tags.some(t => t.toLowerCase().includes(filter.search.toLowerCase()));
      const matchesCategory = filter.category === CategoryType.ALL || tool.category === filter.category;
      const matchesFavorite = !filter.favoritesOnly || favorites.has(tool.id);

      return matchesSearch && matchesCategory && matchesFavorite;
    });
  }, [filter, favorites]);

  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-900">
      <Header 
        searchTerm={filter.search} 
        onSearchChange={(s) => setFilter(prev => ({ ...prev, search: s }))} 
      />
      
      <CategoryNav 
        selectedCategory={filter.category} 
        onSelectCategory={(c) => setFilter(prev => ({ ...prev, category: c }))}
        showFavorites={filter.favoritesOnly}
        onToggleFavorites={() => setFilter(prev => ({ ...prev, favoritesOnly: !prev.favoritesOnly }))}
      />

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="mb-6 flex items-end gap-2">
           <h2 className="text-2xl font-bold text-slate-800">
             {filter.favoritesOnly ? '我的收藏' : filter.category}
           </h2>
           <span className="mb-1 text-sm font-medium text-slate-500 bg-white/50 px-2 py-0.5 rounded-lg backdrop-blur-sm">
             共 {filteredTools.length} 款工具
           </span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map(tool => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                isFavorite={favorites.has(tool.id)} 
                onToggleFavorite={toggleFavorite} 
              />
            ))}
          </div>
        ) : (
          <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-white/50 bg-white/30 text-slate-500 backdrop-blur-md shadow-lg">
            <p className="text-xl font-medium">未找到相关工具</p>
            <p className="mt-2 text-sm opacity-70">请尝试调整搜索关键词或切换分类</p>
            <button 
              onClick={() => setFilter({ search: '', category: CategoryType.ALL, favoritesOnly: false })}
              className="mt-6 rounded-full bg-blue-600 px-6 py-2 text-sm font-bold text-white shadow-lg hover:bg-blue-700 transition-transform active:scale-95"
            >
              显示全部
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;