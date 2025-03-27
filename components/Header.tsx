import { Search, ChevronDown, List, Layout } from 'lucide-react';
import { HeaderProps } from '@/types';

export function Header({ onViewChange, currentView, onNewProject }: HeaderProps) {
    return (
        <div className="bg-white py-3 px-1 flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
                <div className="flex items-center">
                    <div className="flex border-b-2 border-teal-500 mr-4">
                        <button
                            className={`px-3 py-1.5 text-sm font-medium ${currentView === 'list' ? 'text-teal-500' : 'text-gray-400 hover:text-gray-700'}`}
                            onClick={() => onViewChange('list')}
                        >
                            List
                        </button>
                        <button
                            className={`px-3 py-1.5 text-sm font-medium ${currentView === 'kanban' ? 'text-teal-500' : 'text-gray-400 hover:text-gray-700'}`}
                            onClick={() => onViewChange('kanban')}
                        >
                            Kanban
                        </button>
                    </div>
                </div>
                
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="pl-9 pr-4 py-1.5 bg-gray-100 rounded-md text-sm w-48 focus:outline-none"
                    />
                </div>
            </div>
            
            <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">
                    <span>Sort</span>
                    <ChevronDown size={14} />
                </button>
                
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">
                    <span>Add filter</span>
                    <ChevronDown size={14} />
                </button>
                
                <button 
                    onClick={onNewProject}
                    className="px-3 py-1.5 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-md"
                >
                    New Project
                </button>
            </div>
        </div>
    );
} 