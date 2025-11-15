// src/app/page.tsx
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import projectsData from '@/data/projects.json';
import { ProjectData } from '@/types';

export default function HomePage() {
  // Type assertion to tell TypeScript the JSON matches our interface
  const data = projectsData as ProjectData;
  
  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F2C7C7] via-white to-[#D5F3D8]">
          <div className="container mx-auto px-6 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-[#FFB7C5]">Quinn</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Backend Developer & Data Scientist
              </p>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                I build scalable backend systems and leverage data science to solve complex problems. 
                Experienced in Java, Python, and cloud technologies.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-[#FFB7C5] text-white rounded-lg font-medium hover:bg-[#F2C7C7] transition-colors shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-[#FFB7C5] text-[#FFB7C5] rounded-lg font-medium hover:bg-[#FFB7C5] hover:text-white transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with Scroll Effect */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Here are some of my recent works
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection skills={data.skills} />

        {/* Contact Section */}
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}