// src/app/page.tsx
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import TypeWriter from '@/components/TypeWriter';
import projectsData from '@/data/projects.json';
import { ProjectData } from '@/types';

export default function HomePage() {
  const data = projectsData as ProjectData;

  return (
    <>
      <Header />

      <main className="pt-16">

        {/* Hero Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-cream via-white to-soft-peach"
        >
          <div className="container mx-auto px-6 text-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 min-h-[5rem]">
                <TypeWriter
                  text="Hi I'm Quinn"
                  delay={150}
                  className="text-warm-brown"
                />
              </h1>

              <p className="text-xl md:text-2xl text-dark-slate mb-8 max-w-2xl mx-auto">
                Software Engineer and foodie
              </p>

              <p className="text-lg text-cool-gray mb-12 max-w-3xl mx-auto">
                I read comics, climb rocks, and occasionally touch grass. And somewhere in between all that, I also write code—mostly Java, Python, and TypeScript—with some AWS experience sprinkled in.
              </p>

              <div className="flex gap-4 justify-center">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-warm-brown text-white rounded-lg font-medium hover:bg-soft-peach transition-colors shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-warm-brown text-warm-brown rounded-lg font-medium hover:bg-warm-brown hover:text-white transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
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
