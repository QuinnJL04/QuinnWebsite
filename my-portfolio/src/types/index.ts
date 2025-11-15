export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    imageUrl?: string;
}

export interface Skill {
    name: string;
    category: 'backend' | 'frontend' | 'database' | 'devops' | 'datascience';
    level: number;
}

export interface ProjectData {
    projects: Project[];
    skills: Skill[];
}