// src/components/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-forest text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Quinn</p>
            <p className="text-warm-cream text-sm">Backend Developer & Data Scientist</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="#about" 
              className="text-warm-cream hover:text-soft-peach transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-warm-cream hover:text-soft-peach transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-warm-cream hover:text-soft-peach transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-slate text-center text-warm-cream text-sm">
          <p>© {currentYear} Quinn. Built with Next.js & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}