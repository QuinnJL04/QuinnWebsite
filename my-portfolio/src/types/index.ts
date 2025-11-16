export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string | null;
    imageUrl?: string;
}

export interface Skill {
    name: string;
    category: 'backend' | 'frontend' | 'database' | 'devops' | 'datascience' | 'mobile';
    level: number;
}

export interface ProjectData {
    projects: Project[];
    skills: Skill[];
}