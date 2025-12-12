import React, { useEffect, useState } from 'react';

const MantraBlock: React.FC = () => {
  const lines = [
    "I am dedicated.",
    "I am disciplined.",
    "I am determined.",
    "I will persist.",
    "I will prevail.",
    "I will prosper.",
    "That’s what Mind Warriors do."
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    // Reveal lines one by one with a "breath" cadence (approx 1.5s per line)
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < lines.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 py-12 md:py-20">
      {lines.map((line, index) => (
        <h2
          key={index}
          className={`
            font-mythic text-2xl md:text-4xl lg:text-5xl text-center tracking-wide
            transition-all duration-1000 ease-out transform
            ${index === lines.length - 1 ? 'mt-8 text-3xl md:text-5xl lg:text-6xl font-extrabold' : 'font-semibold'}
            ${visibleLines > index 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95'}
          `}
        >
          <span className={`
            bg-clip-text text-transparent bg-gradient-to-r 
            ${index === lines.length - 1 
              ? 'from-amber-100 via-yellow-300 to-amber-100 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]' 
              : 'from-amber-200/90 via-amber-400/90 to-amber-600/90 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]'}
          `}>
            {line}
          </span>
        </h2>
      ))}
    </div>
  );
};

export default MantraBlock;