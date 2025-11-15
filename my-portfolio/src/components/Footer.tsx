export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Quinn</p>
            <p className="text-gray-400 text-sm">Backend Developer & Data Scientist</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-[#FFB7C5] transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-[#FFB7C5] transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-[#FFB7C5] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Quinn. Built with Next.js & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}