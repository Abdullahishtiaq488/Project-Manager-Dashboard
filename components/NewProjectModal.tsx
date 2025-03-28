import { X } from 'lucide-react';
import { useState } from 'react';
import { NewProjectModalProps, Project } from '@/types';

export function NewProjectModal({ isOpen, onClose, onAddProject }: NewProjectModalProps) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        status: 'In Progress',
        priority: '',
        startDate: '',
        endDate: '',
        description: '',
        labels: '',
        teamMembers: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.priority) {
            alert('Please fill in all required fields');
            return;
        }

        const newProject: Project = {
            id: Math.random().toString(36).substr(2, 9),
            title: formData.name,
            subtitle: formData.description.slice(0, 50) + (formData.description.length > 50 ? '...' : ''),
            status: formData.status as any,
            priority: formData.priority as any,
            date: formData.startDate || new Date().toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short'
            }),
            progress: 0,
            users: [{ id: 1, avatar: '/images/avatar1.png' }]
        };

        onAddProject(newProject);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black/25 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="bg-white w-[844px] rounded-[10px] shadow-xl relative z-10">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-medium text-gray-900">Add new task</h2>
                            <button className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-500 text-sm">?</span>
                            </button>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Row 1: Task name and Labels */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Task name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter name"
                                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Labels
                                </label>
                                <input
                                    type="text"
                                    name="labels"
                                    value={formData.labels}
                                    onChange={handleChange}
                                    placeholder="Add labels"
                                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Row 2: Status on left, Start date and End date on right */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-[#EFF6FF] text-[#3B82F6] border border-gray-200 rounded-lg focus:outline-none appearance-none"
                                >
                                    <option value="Not Started">Not Started</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Start date
                                    </label>
                                    <input
                                        type="text"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        placeholder="Starts on"
                                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        End date
                                    </label>
                                    <input
                                        type="text"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        placeholder="Ends on"
                                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Task priority and Team members */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Task priority
                                </label>
                                <select
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none appearance-none"
                                >
                                    <option value="" disabled>Select Priority</option>
                                    <option value="Urgent">Urgent</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Team members
                                </label>
                                <select
                                    name="teamMembers"
                                    value={formData.teamMembers}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none appearance-none"
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="1">Team Member 1</option>
                                    <option value="2">Team Member 2</option>
                                    <option value="3">Team Member 3</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 4: Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter a description"
                                rows={3}
                                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none resize-none"
                            />
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 focus:outline-none"
                            >
                                Create task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 