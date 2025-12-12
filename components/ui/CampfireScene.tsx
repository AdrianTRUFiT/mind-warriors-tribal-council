import React from 'react';

const CampfireScene: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Central Glow Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/20 blur-[100px] rounded-full animate-pulse-slow"></div>

      {/* The Fire */}
      <div className="relative z-10 mt-20">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
            {/* Logs */}
            <svg viewBox="0 0 100 100" className="absolute bottom-0 w-full h-full text-amber-900 drop-shadow-2xl">
                <path d="M20,90 L80,90 L75,80 L25,80 Z" fill="#3E2723" />
                <path d="M30,85 L70,85 L85,70 L15,70 Z" fill="#4E342E" transform="rotate(15, 50, 85)" />
                <path d="M30,85 L70,85 L85,70 L15,70 Z" fill="#5D4037" transform="rotate(-15, 50, 85)" />
            </svg>
            
            {/* Flames - Using CSS animations defined in style or Tailwind classes */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full h-full flex justify-center items-end mix-blend-screen">
                {/* Main Flame */}
                <div className="w-16 h-24 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 rounded-t-full rounded-b-[40%] blur-[2px] animate-fire-flicker origin-bottom"></div>
                {/* Secondary Flames */}
                <div className="absolute w-10 h-16 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-200 rounded-full blur-[3px] animate-[bounce_2s_infinite] opacity-70 bottom-2 -left-2"></div>
                <div className="absolute w-8 h-14 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-200 rounded-full blur-[3px] animate-[bounce_2.5s_infinite] opacity-70 bottom-2 -right-1 delay-100"></div>
            </div>

            {/* Core Heat Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-orange-500 blur-xl opacity-60 animate-pulse"></div>
        </div>
      </div>

      {/* The Tribe - Abstract Silhouettes */}
      {/* These are SVG shapes positioned in a semi-circle perspective */}
      <div className="absolute bottom-0 w-full h-full pointer-events-none z-20">
        <svg viewBox="0 0 1000 400" className="w-full h-full opacity-90" preserveAspectRatio="xMidYMax slice">
          <defs>
             <linearGradient id="silhouette-grad" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#0f253a" stopOpacity="0.9" />
               <stop offset="100%" stopColor="#001426" stopOpacity="1" />
             </linearGradient>
          </defs>
          
          {/* Back Row (Smaller, darker) */}
          <g transform="translate(0, 50) scale(0.9)" opacity="0.6">
            <path d="M200,350 Q225,280 250,350 L300,450 L150,450 Z" fill="url(#silhouette-grad)" />
            <path d="M750,350 Q775,280 800,350 L850,450 L700,450 Z" fill="url(#silhouette-grad)" />
            <path d="M350,340 Q375,270 400,340 L450,450 L300,450 Z" fill="url(#silhouette-grad)" />
            <path d="M600,340 Q625,270 650,340 L700,450 L550,450 Z" fill="url(#silhouette-grad)" />
          </g>

          {/* Front Row (Larger, more distinct) */}
          <g transform="translate(0, 80)">
             {/* Left */}
             <path d="M100,350 C100,350 140,250 180,350 L240,500 L40,500 Z" fill="url(#silhouette-grad)" />
             <path d="M280,380 C280,380 320,280 360,380 L420,500 L220,500 Z" fill="url(#silhouette-grad)" />
             
             {/* Right */}
             <path d="M900,350 C900,350 860,250 820,350 L760,500 L960,500 Z" fill="url(#silhouette-grad)" />
             <path d="M720,380 C720,380 680,280 640,380 L580,500 L780,500 Z" fill="url(#silhouette-grad)" />

             {/* Center-ish (Leaving middle open for fire visibility) */}
             <circle cx="180" cy="270" r="25" fill="#0f253a" opacity="0.8" /> 
             <circle cx="360" cy="300" r="28" fill="#0f253a" opacity="0.8" />
             <circle cx="640" cy="300" r="28" fill="#0f253a" opacity="0.8" />
             <circle cx="820" cy="270" r="25" fill="#0f253a" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* Floating particles from fire specifically */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-40 h-60 overflow-hidden pointer-events-none">
         {/* We rely on the global particle system for background, but these are intense central sparks */}
         <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-yellow-200 rounded-full animate-[float_3s_ease-out_infinite] opacity-0" style={{ animationDelay: '0.2s', left: '45%' }}></div>
         <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-orange-300 rounded-full animate-[float_4s_ease-out_infinite] opacity-0" style={{ animationDelay: '0.8s', left: '55%' }}></div>
         <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-amber-100 rounded-full animate-[float_2.5s_ease-out_infinite] opacity-0" style={{ animationDelay: '1.5s', left: '50%' }}></div>
      </div>
    </div>
  );
};

export default CampfireScene;