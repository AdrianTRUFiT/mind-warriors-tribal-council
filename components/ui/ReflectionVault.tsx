import React, { useState } from 'react';
import { Save, Lock } from 'lucide-react';

const ReflectionVault: React.FC = () => {
  const [reflection, setReflection] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (!reflection.trim()) return;
    
    // Simulate API call/save
    setTimeout(() => {
      setIsSaved(true);
    }, 800);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#001426]/50 backdrop-blur-md shadow-2xl shadow-black/50">
        
        {/* Card Header */}
        <div className="p-6 md:p-8 text-center border-b border-white/5">
          <h3 className="font-mythic text-xl md:text-2xl text-amber-100 tracking-wider mb-2">
            Share your voice with the tribe
          </h3>
          <p className="text-slate-400 text-sm md:text-base font-light">
            Your words become part of the collective history.
          </p>
        </div>

        {/* Interaction Area */}
        <div className="p-6 md:p-8">
          {!isSaved ? (
            <div className="space-y-6">
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="What breakthrough brought you here today?"
                className="w-full h-40 bg-black/20 text-amber-50 placeholder-slate-500 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none font-serif text-lg leading-relaxed"
              />
              
              <button
                onClick={handleSave}
                disabled={!reflection.trim()}
                className={`
                  group w-full py-4 rounded-lg flex items-center justify-center gap-3 font-semibold tracking-wider uppercase transition-all duration-300
                  ${reflection.trim() 
                    ? 'bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]' 
                    : 'bg-white/5 text-slate-500 cursor-not-allowed'}
                `}
              >
                <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Save to SoulVaultⓈ</span>
              </button>
            </div>
          ) : (
            <div className="py-12 flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-700">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                <Lock className="w-8 h-8 text-amber-400" />
              </div>
              <p className="text-amber-200 font-mythic text-xl">Encoded & Stored</p>
              <p className="text-slate-400 text-sm max-w-md text-center">
                Your reflection has been safely added to your SoulVaultⓈ and the tribal lineage.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReflectionVault;