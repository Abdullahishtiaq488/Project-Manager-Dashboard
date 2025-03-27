'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { TopBar } from '@/components/TopBar';
import { StatusCard } from '@/components/StatusCard';
import { KanbanBoard } from '@/components/KanbanBoard';
import { NewProjectModal } from '@/components/NewProjectModal';
import { mockProjects } from '@/data/mockData';
import { Project } from '@/types';

export default function ProjectsPage() {
    const [view, setView] = useState<'list' | 'kanban'>('kanban');
    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState(mockProjects);

    const handleNewProject = () => {
        setShowModal(true);
    };

    const handleAddProject = (project: Project) => {
        setProjects([...projects, project]);
        setShowModal(false);
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col ml-[261px] max-w-[calc(100vw-261px)]">
                <TopBar title="Projects" />

                <div className="p-6 overflow-x-hidden">
                    <div className="grid grid-cols-4 gap-6 mb-8">
                        <StatusCard
                            count={120}
                            label="Total Projects"
                            color="blue"
                            percent={70}
                            percentLabel="Projects completed"
                        />
                        <StatusCard
                            count={5}
                            label="In Progress"
                            color="green"
                            percent={30}
                            percentLabel="Projects ongoing"
                        />
                        <StatusCard
                            count={25}
                            label="Pending"
                            color="yellow"
                            percent={20}
                            percentLabel="Projects pending"
                        />
                        <StatusCard
                            count={40}
                            label="Completed"
                            color="orange"
                            percent={70}
                            percentLabel="Projects completed"
                        />
                    </div>

                    <Header
                        onViewChange={setView}
                        currentView={view}
                        onNewProject={handleNewProject}
                    />

                    <KanbanBoard
                        projects={projects}
                        onNewProject={handleNewProject}
                    />
                </div>
            </div>

            {showModal && (
                <NewProjectModal
                    onClose={() => setShowModal(false)}
                    onAddProject={handleAddProject}
                />
            )}
        </div>
    );
} 