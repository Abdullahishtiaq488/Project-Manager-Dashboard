export interface Project {
  id: string;
  title: string;
  subtitle: string;
  priority: 'High' | 'Medium' | 'Low' | 'Urgent';
  date: string;
  progress: number;
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Other';
  users: User[];
}

export interface User {
  id: number;
  avatar: string;
}

export interface Column {
  id: 'not-started' | 'in-progress' | 'completed' | 'other';
  title: string;
  count: number;
  projects: Project[];
}

export interface StatusCardProps {
  count: number;
  label: string;
  color: 'blue' | 'green' | 'yellow' | 'orange';
  percent?: number;
  percentLabel?: string;
}

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  priority: 'High' | 'Medium' | 'Low' | 'Urgent';
  date: string;
  progress: number;
  users: User[];
  onClick?: () => void;
}

export interface KanbanBoardProps {
  projects: Project[];
  onNewProject: () => void;
}

export interface HeaderProps {
  title?: string;
  onViewChange: (view: 'list' | 'kanban') => void;
  currentView: 'list' | 'kanban';
  onNewProject: () => void;
}

export interface TopBarProps {
  title: string;
}

export interface NewProjectModalProps {
  onClose: () => void;
  onAddProject: (project: Project) => void;
} 