import React from 'react';
import { Search, GraduationCap } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="relative w-full overflow-hidden pt-4 pb-2 md:pt-6">
      <div className="container mx-auto px-4">
        {/* Glass Card Container for Header */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-6 shadow-xl backdrop-blur-md md:flex-row md:items-center md:p-8">
          
          {/* Left: Branding */}
          <div className="relative z-10 flex flex-col justify-center md:max-w-lg">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg md:h-14 md:w-14">
                 <GraduationCap size={28} />
              </div>
              <div>
                <h2 className="text-sm font-semibold tracking-wider text-blue-900/70 uppercase">杭州萧山技师学院</h2>
                <h1 className="text-2xl font-extrabold text-slate-900 md:text-3xl">AI 学术专用网站</h1>
              </div>
            </div>
            
            <p className="mb-6 max-w-md text-sm text-slate-600 font-medium leading-relaxed">
              汇聚海量国内优质 AI 工具，赋能学术研究与创作。
              支持文献检索、论文写作、数据分析一站式服务。
            </p>

            {/* Search Bar Integrated in Left Area */}
            <div className="relative w-full max-w-sm group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full rounded-xl border border-white/50 bg-white/60 py-3 pl-10 pr-4 text-slate-800 placeholder-slate-500 shadow-inner backdrop-blur-sm transition-all focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                placeholder="搜索产品名称、功能或分类..."
              />
            </div>
          </div>

          {/* Right: Illustration Area (Filling whitespace) */}
          <div className="absolute right-0 top-0 bottom-0 hidden w-1/2 md:block overflow-hidden rounded-r-3xl pointer-events-none opacity-90">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/80 z-10"></div>
            <img 
              src="https://picsum.photos/seed/academic_ai_bg/800/400" 
              alt="AI Academic Background" 
              className="h-full w-full object-cover object-center mask-image-linear-gradient"
            />
          </div>
          
          {/* Mobile Filler Image (Optional, keeps mobile clean usually, but adding small graphic) */}
          <div className="mt-6 h-32 w-full overflow-hidden rounded-xl md:hidden relative">
             <img 
              src="https://picsum.photos/seed/academic_ai_mobile/600/200" 
              alt="AI Mobile Header" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;