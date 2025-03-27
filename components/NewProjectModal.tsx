import { useState } from 'react';
import { X } from 'lucide-react';
import { NewProjectModalProps, Project } from '@/types';

export function NewProjectModal({ onClose, onAddProject }: NewProjectModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        status: 'In Progress',
        priority: 'Medium',
        startDate: '',
        endDate: '',
        teamMembers: [],
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        const newProject: Project = {
            id: Math.random().toString(36).substr(2, 9),
            title: formData.name,
            subtitle: 'New Project',
            status: formData.status as any,
            priority: formData.priority as any,
            date: formData.startDate || new Date().toLocaleDateString(),
            progress: 0,
            users: [{ id: 1, avatar: '/images/avatar1.png' }]
        };

        onAddProject(newProject);
        setFormData({
            name: '',
            status: 'In Progress',
            priority: 'Medium',
            startDate: '',
            endDate: '',
            teamMembers: [],
            description: '',
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-lg font-medium">Add new task</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Task name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="status-in-progress"
                                    name="status"
                                    value="In Progress"
                                    checked={formData.status === 'In Progress'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-teal-500"
                                />
                                <label htmlFor="status-in-progress" className="text-sm">In Progress</label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Labels
                            </label>
                            <input
                                type="text"
                                placeholder="Add labels"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Start date
                            </label>
                            <input
                                type="text"
                                name="startDate"
                                placeholder="Starts on"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                End date
                            </label>
                            <input
                                type="text"
                                name="endDate"
                                placeholder="Ends on"
                                value={formData.endDate}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Task priority
                        </label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Team members
                        </label>
                        <select
                            className="w-full border border-gray-300 rounded-md p-2 text-sm"
                        >
                            <option value="">Select</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter a description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm min-h-[100px]"
                        />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            onClick={handleSave}
                            className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600"
                        >
                            Create task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 