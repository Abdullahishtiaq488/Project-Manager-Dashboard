import React from 'react';
import { StatusCardProps } from '@/types';

export function StatusCard({ count, label, color, percent, percentLabel }: StatusCardProps) {
  const bgColors = {
    blue: 'bg-gray-100',
    green: 'bg-teal-100',
    yellow: 'bg-amber-100',
    orange: 'bg-sky-100',
  };

  const textColors = {
    blue: 'text-gray-700',
    green: 'text-teal-500',
    yellow: 'text-amber-500',
    orange: 'text-sky-500',
  };

  const iconColors = {
    blue: 'text-gray-700',
    green: 'text-teal-500',
    yellow: 'text-amber-500',
    orange: 'text-sky-500',
  };

  const iconBgColors = {
    blue: 'bg-gray-100',
    green: 'bg-teal-100',
    yellow: 'bg-amber-100',
    orange: 'bg-sky-100',
  };

  const getIcon = (color: string) => {
    switch (color) {
      case 'blue':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'green':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 12l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'yellow':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'orange':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 12l-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <div className={`w-14 h-14 ${iconBgColors[color]} rounded-full flex items-center justify-center`}>
          <div className={`${iconColors[color]}`}>
            {getIcon(color)}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className={`text-[32px] font-bold ${textColors[color]}`}>
            {count < 10 ? `0${count}` : count}
          </div>
          <div className="text-gray-500 text-sm">{label}</div>
        </div>
      </div>

      {percent !== undefined && (
        <div className="mt-3 flex items-center">
          <div className="flex items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-1"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            <span className="text-gray-500">{percent}% {percentLabel}</span>
          </div>
        </div>
      )}
    </div>
  );
} 