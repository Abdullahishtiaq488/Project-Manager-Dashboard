import { useState, useEffect, useRef } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { KanbanBoardProps, Column, Project } from '@/types';

export function KanbanBoard({ projects, onNewProject }: KanbanBoardProps) {
    const [columns, setColumns] = useState<Column[]>([]);
    const [draggingProjectId, setDraggingProjectId] = useState<string | null>(null);
    const dragSourceColumnId = useRef<Column['id'] | null>(null);

    useEffect(() => {
        // Group projects by status
        const notStarted = projects.filter(p => p.status === 'Not Started');
        const inProgress = projects.filter(p => p.status === 'In Progress');
        const completed = projects.filter(p => p.status === 'Completed');
        const other = projects.filter(p => p.status === 'Other');

        setColumns([
            { id: 'not-started', title: 'Not Started', count: notStarted.length, projects: notStarted },
            { id: 'in-progress', title: 'In Progress', count: inProgress.length, projects: inProgress },
            { id: 'completed', title: 'Completed', count: completed.length, projects: completed },
            { id: 'other', title: 'Other', count: other.length, projects: other },
        ]);
    }, [projects]);

    // Handle drag start
    const handleDragStart = (projectId: string, columnId: Column['id']) => {
        setDraggingProjectId(projectId);
        dragSourceColumnId.current = columnId;
    };

    // Handle drag over
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    // Handle drop
    const handleDrop = (targetColumnId: Column['id']) => {
        if (!draggingProjectId || !dragSourceColumnId.current || targetColumnId === dragSourceColumnId.current) {
            return;
        }

        // Find the source column
        const sourceColumn = columns.find(col => col.id === dragSourceColumnId.current);
        if (!sourceColumn) return;

        // Find the project in the source column
        const projectIndex = sourceColumn.projects.findIndex(p => p.id === draggingProjectId);
        if (projectIndex === -1) return;

        // The project to move
        const project = { ...sourceColumn.projects[projectIndex] };

        // Set the new status based on the target column
        project.status = columns.find(col => col.id === targetColumnId)?.title as Project['status'];

        // Create new source column projects array without the dragging project
        const newSourceProjects = [...sourceColumn.projects];
        newSourceProjects.splice(projectIndex, 1);

        // Find the target column and add project to it
        const newColumns = columns.map(col => {
            if (col.id === dragSourceColumnId.current) {
                return { ...col, projects: newSourceProjects, count: newSourceProjects.length };
            }
            if (col.id === targetColumnId) {
                const newProjects = [...col.projects, project];
                return { ...col, projects: newProjects, count: newProjects.length };
            }
            return col;
        });

        setColumns(newColumns);
        setDraggingProjectId(null);
        dragSourceColumnId.current = null;
    };

    // Handle drag end
    const handleDragEnd = () => {
        setDraggingProjectId(null);
        dragSourceColumnId.current = null;
    };

    // Column status circle colors
    const getStatusCircleColor = (status: string) => {
        switch (status) {
            case 'Not Started': return 'bg-gray-800';
            case 'In Progress': return 'bg-amber-500';
            case 'Completed': return 'bg-teal-500';
            case 'Other': return 'bg-gray-400';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full min-h-[500px]">
            {columns.map((column) => (
                <div
                    key={column.id}
                    className="bg-gray-50 rounded-xl"
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(column.id)}
                >
                    <div className="py-4 px-1">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-md p-2">
                            <div className={`w-2.5 h-2.5 rounded-full ${getStatusCircleColor(column.title)}`}></div>
                            <h3 className="text-sm font-medium text-gray-800">{column.title}</h3>
                            <span className="text-gray-500 ml-1">{column.count}</span>
                        </div>
                    </div>

                    <div className="px-2 space-y-2">
                        {column.projects.map((project) => (
                            <div
                                key={project.id}
                                draggable
                                onDragStart={() => handleDragStart(project.id, column.id)}
                                onDragEnd={handleDragEnd}
                                className={`group ${draggingProjectId === project.id ? 'opacity-50 shadow-lg' : ''}`}
                            >
                                <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1 rounded hover:bg-gray-100">
                                        <MoreHorizontal size={16} className="text-gray-400" />
                                    </button>
                                </div>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    priority={project.priority}
                                    date={project.date}
                                    progress={project.progress}
                                    users={project.users}
                                />
                            </div>
                        ))}

                        {column.projects.length === 0 && (
                            <div
                                className="border-2 border-dashed border-gray-200 rounded-md h-[80px] flex items-center justify-center text-sm text-gray-400 mb-2"
                                onClick={onNewProject}
                            >
                                <div className="flex flex-col items-center gap-1 cursor-pointer">
                                    <Plus size={18} className="text-gray-300" />
                                    <span>Add a card</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
} 