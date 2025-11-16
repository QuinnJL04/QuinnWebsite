// src/components/ProjectCard.tsx
'use client';

import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-warm-cream to-soft-peach flex items-center justify-center">
        <div className="text-6xl">
          {/* Placeholder icon - you can replace with actual images */}
          💻
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-deep-forest mb-3">
          {project.title}
        </h3>
        
        <p className="text-cool-gray mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-warm-cream text-dark-slate rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 bg-warm-brown text-white rounded-lg hover:bg-soft-peach transition-colors"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 border-2 border-warm-brown text-warm-brown rounded-lg hover:bg-warm-brown hover:text-white transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}