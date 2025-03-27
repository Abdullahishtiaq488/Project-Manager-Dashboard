import { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
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

    return (
        <div className="flex gap-2 overflow-x-auto pb-6 mt-6 w-full" style={{ scrollbarWidth: 'thin' }}>
            {columns.map((column) => (
                <div
                    key={column.id}
                    className="flex-shrink-0 w-[300px] bg-gray-50 rounded-md pb-4"
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(column.id)}
                >
                    <div className="px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <h3 className="font-medium text-gray-800">{column.title}</h3>
                            <span className="text-xs font-medium px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full">
                                {column.count}
                            </span>
                        </div>
                        <button className="w-6 h-6 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 text-gray-600">
                            <Plus size={14} />
                        </button>
                    </div>

                    <div className="px-3 space-y-2 mt-1">
                        {column.projects.map((project) => (
                            <div
                                key={project.id}
                                draggable
                                onDragStart={() => handleDragStart(project.id, column.id)}
                                onDragEnd={handleDragEnd}
                            >
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
                                className="border-2 border-dashed border-gray-200 rounded-md h-[100px] flex items-center justify-center text-sm text-gray-400 mt-2"
                                onClick={onNewProject}
                            >
                                <div className="flex flex-col items-center gap-1 cursor-pointer">
                                    <Plus size={20} className="text-gray-300" />
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