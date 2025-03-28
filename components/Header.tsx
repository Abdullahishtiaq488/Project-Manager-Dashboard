import { Search, ChevronDown, List, Layout, ArrowDownUp, Filter } from 'lucide-react';
import { HeaderProps } from '@/types';

export function Header({ onViewChange, currentView, onNewProject }: HeaderProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-6 relative">
                    <button
                        onClick={() => onViewChange('list')}
                        className={`px-1 py-2 text-base font-roboto  font-medium flex items-center gap-2 relative ${currentView === 'list' ? 'text-teal-500' : 'text-gray-500'}`}
                    >
                        <List size={20} />
                        <span>List</span>
                        {currentView === 'list' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500" />
                        )}
                    </button>
                    <button
                        onClick={() => onViewChange('kanban')}
                        className={`px-1 py-2 text-base font-roboto font-medium flex items-center gap-2 relative ${currentView === 'kanban' ? 'text-teal-500' : 'text-gray-500'}`}
                    >
                        <Layout size={20} />
                        <span>Kanban</span>
                        {currentView === 'kanban' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500" />
                        )}
                    </button>
                </div>
            </div>

            <div className="flex items-start gap-3 ">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[240px] h-[30px] pl-10 pr-4 bg-white border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    />
                </div>

                <button className="flex items-center gap-2 px-4 h-[30px] text-gray-700 bg-white border border-gray-200 rounded-[10px] hover:bg-gray-50">
                    <ArrowDownUp size={20} className="text-gray-500" />
                    <span className="text-sm">Sort</span>
                </button>

                <button className="flex items-center gap-2 px-4 h-[30px] text-gray-700 bg-white border border-gray-200 rounded-[10px] hover:bg-gray-50">
                    <Filter size={20} className="text-gray-500" />
                    <span className="text-sm">Add filter</span>
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