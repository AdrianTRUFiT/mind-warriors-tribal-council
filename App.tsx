import React, { useState } from 'react';
import TribalCouncilPage from './components/TribalCouncilPage';
import { MilestoneDay } from './types';

const App: React.FC = () => {
  // In a real app, this state would come from a user context or database
  const [currentDay, setCurrentDay] = useState<MilestoneDay>(MilestoneDay.DAY_7);
  const [isViewingCouncil, setIsViewingCouncil] = useState(true);

  const handleReturn = () => {
    // Simulate navigation back to dashboard
    setIsViewingCouncil(false);
  };

  if (!isViewingCouncil) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center space-y-8 text-white p-4">
        <h1 className="text-4xl font-bold font-mythic">MindSet Dashboard</h1>
        <p className="text-slate-400">Simulating Main App State...</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[7, 14, 21, 30].map((day) => (
             <button
             key={day}
             onClick={() => {
               setCurrentDay(day as MilestoneDay);
               setIsViewingCouncil(true);
             }}
             className="px-6 py-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500 hover:text-amber-400 transition-all"
           >
             Unlock Day {day} Bonus
           </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <TribalCouncilPage 
      day={currentDay} 
      onReturn={handleReturn} 
    />
  );
};

export default App;