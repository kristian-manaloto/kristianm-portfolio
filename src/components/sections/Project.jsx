import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { RevealOnScroll } from '../RevealOnScroll';

export const projects = [
  {
    title: 'LLM Reproducibility Analysis',
    description:
      'Researched how Large Language Models reproduce software issues across 150+ examples and analyzed key failure patterns.',
    tech: ['Python', 'Data Analysis', 'Pandas', 'NumPy', 'Matplotlib'],
    link: '#',
  },
  {
    title: 'RouteMetrics',
    description:
      'Built a GPS-based ride analysis tool to visualize paths, compute speed profiles, and detect rapid acceleration events.',
    tech: ['Python', 'Plotly', 'Data Visualization', 'NumPy', 'Pandas'],
    link: '#',
  },
  {
    title: 'Restaurant Management System',
    description:
      'Led a 7-person team to develop a restaurant system with inventory, POS, and kitchen timing, backed by an SQL database.',
    tech: ['Java', 'SQL', 'MVC', 'Object-Oriented Programming'],
    link: '#',
  },
  {
    title: 'Forum Posting Platform',
    description:
      'Created a full-stack messaging platform with real-time threads, secure REST APIs, and Docker-based deployment.',
    tech: ['JavaScript', 'React', 'Node.js', 'SQL', 'Docker'],
    link: '#',
  },
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-glow text-center">
            {'>'} projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Project;

export const Card = ({ project }) => {
  return (
    <div className="p-6 rounded-xl border border-border card-hover">
      <h3 className="text-xl font-bold mb-2 text-foreground">
        {project.title}
      </h3>

      <p className="text-foreground/70 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, key) => (
          <span
            key={key}
            className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm card-hover"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-start items-center pt-4">
        <a
          href={project.link}
          className="text-primary hover:text-secondary transition-colors duration-300"
        >
          <GitHubLogoIcon className="text-2xl" />
        </a>
      </div>
    </div>
  );
};
