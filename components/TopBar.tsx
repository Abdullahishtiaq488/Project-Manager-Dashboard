import { Search, Bell, MessageCircle } from 'lucide-react';
import { TopBarProps } from '@/types';

export function TopBar({ title }: TopBarProps) {
    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

            <div className="flex items-center gap-4 ">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-50" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-3 bg-gray-50 w-[280px] text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-full p-1">
                    <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                        <MessageCircle size={20} />
                    </button>

                    <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>
            </div>
        </div>
    );
} 