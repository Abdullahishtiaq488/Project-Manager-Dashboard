import React from 'react';
import { StatusCardProps } from '@/types';
import { CircleCheck, ListTodo, RefreshCcw, SquareCheck } from 'lucide-react';

export function StatusCard({ count, label, color, percent, percentLabel }: StatusCardProps) {
  // Define color schemes for different card types
  const iconBgColors = {
    blue: 'bg-gray-200',
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

  // Get the appropriate icon based on card color
  const getIcon = (color: string) => {
    switch (color) {
      case 'blue':
        return (
          <ListTodo size={24} className="text-gray-700" />
        );
      case 'green':
        return (
          <RefreshCcw size={24} className="text-teal-500" />
        );
      case 'yellow':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'orange':
        return (
          <CircleCheck size={24} className="text-sky-500" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white w-[270px] h-[139px] rounded-[20px] border-[0.7px] border-gray-200 p-4 flex flex-col justify-center">
      <div className="flex justify-center items-start gap-4">
        {/* Icon with background */}
        <div className={`w-14 h-14 ${iconBgColors[color]} rounded-full flex items-center justify-center`}>
          {getIcon(color)}
        </div>

        {/* Count and label */}
        <div className="text-center">
          <div className={`text-4xl font-bold ${textColors[color]}`}>
            {count < 10 ? `0${count}` : count}
          </div>
          <div className="text-gray-500 text-sm">{label}</div>
        </div>
      </div>

      {/* Percentage indicator */}
      {percent !== undefined && (
        <div className="mt-3 flex justify-center items-center text-xs gap-2 text-gray-500">
          <SquareCheck size={16} className={`${textColors[color]}`} />
          <span>{percent}% {percentLabel}</span>
        </div>
      )}
    </div>
  );
} 