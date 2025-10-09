import { ArrowUpIcon, TriangleUpIcon } from '@radix-ui/react-icons';

export const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="p-6 bg-secondary border-t border-border mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: copyright / info */}
        <p className="text-foreground/70 text-sm">
          © {new Date().getFullYear()} Kristian Manaloto. All rights reserved.
        </p>

        {/* Right: back to top button */}
        <button
          onClick={scrollToTop}
          className="bg-primary/10 text-primary hover:bg-primary/20 py-2 px-4 rounded-md transition-colors duration-300"
        >
          <ArrowUpIcon />
        </button>
      </div>
    </footer>
  );
};
