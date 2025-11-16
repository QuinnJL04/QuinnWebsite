// src/components/SkillsSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { Skill } from '@/types';

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryColors = {
  backend: '#ad785c',      // warm-brown
  frontend: '#ebbcad',     // soft-peach
  database: '#8a949a',     // cool-gray
  devops: '#525f5c',       // dark-slate
  datascience: '#f9e6db',  // warm-cream
  mobile: '#ad785c',       // warm-brown
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);

  useEffect(() => {
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
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-warm-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-deep-forest">
          Skills & Technologies
        </h2>
        <p className="text-center text-cool-gray mb-12">
          My technical toolkit
        </p>

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
                <h3 className="text-lg font-semibold text-deep-forest mb-3">
                  {skill.name}
                </h3>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{
                      width: visibleSkills[index] ? `${skill.level}%` : '0%',
                      backgroundColor: categoryColors[skill.category],
                    }}
                  />
                </div>

                <span className="text-xs text-cool-gray capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

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
                <span className="font-medium text-deep-forest">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}