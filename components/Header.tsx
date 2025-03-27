import { Search, ChevronDown, List, Layout } from 'lucide-react';
import { HeaderProps } from '@/types';

export function Header({ onViewChange, currentView, onNewProject }: HeaderProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
                <div className="flex bg-gray-100 rounded-md">
                    <button
                        onClick={() => onViewChange('list')}
                        className={`px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1 ${currentView === 'list' ? 'text-teal-500' : 'text-gray-500'}`}
                    >
                        <List size={18} />
                        <span>List</span>
                    </button>
                    <button
                        onClick={() => onViewChange('kanban')}
                        className={`px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1 ${currentView === 'kanban' ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-500'}`}
                    >
                        <Layout size={18} />
                        <span>Kanban</span>
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm w-44"
                    />
                </div>

                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg">
                    <span>Sort</span>
                    <ChevronDown size={16} />
                </button>

                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg">
                    <span>Add filter</span>
                    <ChevronDown size={16} />
                </button>

                <button
                    onClick={onNewProject}
                    className="px-4 py-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-lg flex items-center gap-1"
                >
                    <span className="text-lg font-bold leading-none mr-1">+</span>
                    <span>New Project</span>
                </button>
            </div>
        </div>
    );
} 