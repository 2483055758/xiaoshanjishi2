import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-white/30 bg-white/30 py-8 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-700">
          杭州萧山技师学院 AI 学术专用网站
        </p>
        <p className="mt-2 text-xs text-slate-500">
          © {new Date().getFullYear()} All Rights Reserved. 聚焦国内优质 AI 工具，助力学术科研。
        </p>
        <div className="mt-4 flex justify-center gap-4 text-xs text-slate-400">
          <span>隐私政策</span>
          <span>•</span>
          <span>使用条款</span>
          <span>•</span>
          <span>联系我们</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;