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
      <div className="h-48 bg-gradient-to-br from-[#F2C7C7] to-[#FFB7C5] flex items-center justify-center">
        <div className="text-white text-6xl">
          {/* Placeholder icon - you can replace with actual images */}
          💻
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-[#D5F3D8] text-gray-700 rounded-full text-sm"
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
            className="flex-1 text-center py-2 px-4 bg-[#FFB7C5] text-white rounded-lg hover:bg-[#F2C7C7] transition-colors"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 border-2 border-[#FFB7C5] text-[#FFB7C5] rounded-lg hover:bg-[#FFB7C5] hover:text-white transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}