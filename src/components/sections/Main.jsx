import { DownloadIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { RevealOnScroll } from '../RevealOnScroll';

export const Main = () => {
  return (
    <section
      id="main"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Hero Title with gradient from primary → secondary */}
          <h1
            className="text-2xl md:text-5xl font-bold mb-6 text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            my name is kristian
          </h1>

          {/* Subtitle / Description */}
          <p className="text-foreground/70 text-lg mb-8 max-w-lg mx-auto">
            computer science graduate interested in systems, networks, and
            building reliable software.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            {/* Contact Me Button */}
            <a
              href="#contact"
              className="bg-primary/20 text-primary hover:bg-primary/30 py-2 px-6 rounded-md font-semibold transition-colors duration-300 card-hover flex items-center gap-2"
            >
              get in touch <EnvelopeClosedIcon className="h-5 w-5" />
            </a>

            {/* Resume Download Button */}
            <a
              href="KristianManloto.pdf"
              download
              className="bg-primary/20 text-primary hover:bg-primary/30 py-2 px-6 rounded-md font-semibold transition-colors duration-300 card-hover flex items-center gap-2"
            >
              my resume <DownloadIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
