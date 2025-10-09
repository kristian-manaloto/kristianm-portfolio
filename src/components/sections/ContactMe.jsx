import {
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { RevealOnScroll } from '../RevealOnScroll';

export const ContactMe = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-glow text-center">
            {'>'} contact me
          </h2>

          <div className="p-6 rounded-xl border border-border card-hover bg-secondary text-foreground/70 flex flex-col items-center gap-6">
            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <EnvelopeClosedIcon className="h-5 w-5" />
              kristian.manaloto@outlook.com
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kristian-manaloto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <GitHubLogoIcon className="h-5 w-5" />
              github.com/kristian-manaloto
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kristian-manaloto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
              linkedin.com/in/kristian-manaloto
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
