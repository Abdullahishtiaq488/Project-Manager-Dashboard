import Image from 'next/image';
import { MoreHorizontal, Calendar, MessageSquare, Circle, Flag, CornerDownRight } from 'lucide-react';
import { ProjectCardProps } from '@/types';

export function ProjectCard({
    title,
    subtitle,
    priority,
    date,
    progress,
    users,
    onClick,
}: ProjectCardProps) {
    const priorityColors = {
        Urgent: 'text-red-500',
        High: 'text-pink-500',
        Medium: 'text-blue-500',
        Low: 'text-green-500',
    };

    const priorityBgColors = {
        Urgent: 'bg-red-50',
        High: 'bg-pink-50',
        Medium: 'bg-blue-50',
        Low: 'bg-green-50',
    };

    return (
        <div
            className="bg-white p-4 rounded-xl shadow-sm mb-4 cursor-pointer w-[282px] h-[158px]"
            onClick={onClick}
        >
            {/* Header with priority and menu */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <div className={`${priorityBgColors[priority]} rounded-md px-2 py-1 flex items-center`}>
                        <span className={`text-sm font-medium ${priorityColors[priority]} flex items-center`}>
                            <span className="mr-1"><Flag size={16} /></span> {priority}
                        </span>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* Project title and subtitle */}
            <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                    <CornerDownRight size={16} /><span> {subtitle}</span>
                </div>
            </div>
            <hr />
            {/* Footer with avatars and metadata */}
            <div className="flex items-center justify-between p-1">
                {/* User avatars */}
                <div className="flex -space-x-2">
                    {users.map((user) => (
                        <div key={user.id} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                            <Image
                                src={user.avatar}
                                alt="User avatar"
                                width={28}
                                height={28}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Metadata */}
                <div className="flex items-center space-x-3">
                    {/* Comments count */}
                    <div className="flex items-center text-gray-500">
                        <MessageSquare size={14} className="mr-1" />
                        <span className="text-sm">5</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span className="text-sm">{date}</span>
                    </div>

                    {/* Progress indicator */}
                    {progress !== undefined && (
                        <div className="flex items-center">
                            <div className="relative">
                                <Circle size={18} className="text-gray-200" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-medium text-teal-500">{progress}%</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}