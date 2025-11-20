import React from 'react';
import { ExternalLink, Heart, Star, Zap } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, isFavorite, onToggleFavorite }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white/60 backdrop-blur-md">
      
      {/* Image Area */}
      <div className="relative h-40 w-full overflow-hidden">
        <img 
          src={tool.imageUrl} 
          alt={tool.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {tool.isFeatured && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-amber-400/90 px-2 py-1 text-[10px] font-bold text-white shadow-sm backdrop-blur-md">
              <Star size={10} className="fill-current" /> 推荐
            </span>
          )}
          {tool.isNew && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/90 px-2 py-1 text-[10px] font-bold text-white shadow-sm backdrop-blur-md">
              <Zap size={10} className="fill-current" /> NEW
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite(tool.id);
          }}
          className="absolute top-3 right-3 rounded-full bg-black/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-red-500 shadow-sm"
          title={isFavorite ? "取消收藏" : "加入收藏"}
        >
          <Heart size={16} className={isFavorite ? "fill-red-500 text-red-500" : "text-white"} />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <div className="mb-1 flex items-center justify-between">
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 border border-blue-100/50">
              {tool.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors">
            {tool.name}
          </h3>
        </div>
        
        <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-slate-600">
          {tool.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-white/30 pt-3">
          <div className="flex flex-wrap gap-1 overflow-hidden h-5">
            {tool.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] font-medium text-slate-500">
                #{tag}
              </span>
            ))}
          </div>
          
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm ring-1 ring-slate-900/5 transition-all hover:bg-blue-600 hover:text-white hover:ring-blue-600"
          >
            访问 <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;