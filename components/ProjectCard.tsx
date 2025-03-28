import Image from 'next/image';
import { ArrowDownRight, Calendar, CornerDownRight, Flag, Users, MoreHorizontal, Circle } from 'lucide-react';
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
    // Label colors based on priority
    const priorityColors = {
        'Urgent': 'bg-red-50 text-red-700',
        'High': 'bg-orange-50 text-orange-700',
        'Medium': 'bg-blue-50 text-blue-700',
        'Low': 'bg-gray-50 text-gray-700'
    };

    // Priority tag text
    const priorityText = {
        'Urgent': 'Urgent',
        'High': 'High',
        'Medium': 'Medium',
        'Low': 'Low'
    };

    // Progress circle color
    const getProgressColor = (value: number) => {
        if (value >= 100) return 'text-teal-500';
        if (value > 50) return 'text-blue-500';
        if (value > 0) return 'text-yellow-500';
        return 'text-gray-400';
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm cursor-pointer relative">
            {/* Priority label and menu */}
            <div className="flex items-center justify-between mb-4">
                <span className={`flex px-2 py-1 text-xs font-medium rounded-md ${priorityColors[priority]}`}>
                    <Flag size={16} className='mr-1' /> {priorityText[priority]}
                </span>
                <button className="text-gray-400 hover:text-gray-600 p-1">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* Project title */}
            <h3 className="text-gray-800 font-medium mb-1">{title}</h3>

            {/* Project subtitle */}
            <div className="text-gray-500 text-sm mb-4 flex">
                <CornerDownRight size={16} className='mr-1' /> <span>{subtitle}</span>
            </div>

            <hr />
            {/* Footer with metadata */}
            <div className="flex items-center justify-between mt-2">
                {/* User avatars */}
                <div className="flex -space-x-2">
                    {users.map((user) => (
                        <div key={user.id} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                            <Image
                                src={user.avatar}
                                alt="User avatar"
                                width={24}
                                height={24}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Metadata */}
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                    {/* Comments count */}
                    <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        <span>5</span>
                    </div>

                    {/* Divider */}
                    <div className="text-gray-300">|</div>

                    {/* Date */}
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{date}</span>
                    </div>

                    {/* Divider */}
                    <div className="text-gray-300">|</div>

                    {/* Progress indicator */}
                    <div className="flex items-center">
                        <Circle size={14} className={`mr-1 ${getProgressColor(progress)}`} />
                        <span>{progress}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}