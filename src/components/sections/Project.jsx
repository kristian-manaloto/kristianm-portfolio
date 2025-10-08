import { RevealOnScroll } from '../RevealOnScroll';

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-700 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-2 md:col-end-3 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Project;

export const Card = () => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
      <h3>Network Simulator</h3>
      <p className="text-gray-500 mb-6">
        Blah blah blah with blah bleh bleh llalsdas
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {['Tech1', 'Tech2', 'Tech3'].map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-left items-center pt-4">
        <a href="Github" className="text-blue-400 hover:text-blue-300">
          View Project
        </a>
      </div>
    </div>
  );
};
