// src/components/SkillsSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { Skill } from '@/types';

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryColors = {
  backend: '#FFB7C5',
  frontend: '#F2C7C7',
  database: '#D5F3D8',
  devops: '#FFB7C5',
  datascience: '#F2C7C7',
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);

  useEffect(() => {
    // Animate skills appearing one by one
    const timers = skills.map((_, index) => 
      setTimeout(() => {
        setVisibleSkills(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 100)
    );

    return () => timers.forEach(clearTimeout);
  }, [skills]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-[#F2C7C7]/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 mb-12">
          My technical toolkit
        </p>

        {/* Skills Grid with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transform transition-all duration-500 ${
                visibleSkills[index] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{
                      width: visibleSkills[index] ? `${skill.level}%` : '0%',
                      backgroundColor: categoryColors[skill.category],
                    }}
                  />
                </div>

                {/* Category Badge */}
                <span className="text-xs text-gray-500 capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating/Moving Skill Badges */}
        <div className="mt-16 relative h-40 overflow-hidden">
          <div className="absolute w-full flex gap-4 whitespace-nowrap animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="inline-block px-6 py-3 rounded-full bg-white shadow-md border-l-4"
                style={{
                  borderLeftColor: categoryColors[skill.category],
                }}
              >
                <span className="font-medium text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}