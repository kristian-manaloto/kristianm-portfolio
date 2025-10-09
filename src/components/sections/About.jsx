import { RevealOnScroll } from '../RevealOnScroll';

const skillCategories = [
  {
    name: 'web & frontend',
    skills: ['React', 'JavaScript', 'Tailwind'],
  },
  {
    name: 'backend & systems',
    skills: [
      'Node.js',
      'Python',
      'JavaScript',
      'C',
      'SQL',
      'Docker',
      'REST APIs',
    ],
  },
  {
    name: 'data & devOps tools',
    skills: ['Power BI', 'Git', 'Plotly', 'NumPy', 'Pandas'],
  },
];

const InfoCard = ({ title, items }) => (
  <div className="p-6 rounded-xl border border-border card-hover bg-secondary">
    <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
    <ul className="list-none space-y-4 text-foreground/70">
      {items.map((item, idx) => (
        <li key={idx} className="space-y-1">
          <div className="font-semibold">{item.title}</div>
          {item.subtitle && (
            <div className="italic text-foreground/60">{item.subtitle}</div>
          )}
          {item.details && (
            <ul className="list-disc list-inside ml-4 space-y-1">
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-8 text-glow text-center">
            {'>'} about me
          </h2>
          <p className="text-foreground/70 mb-6">
            an overview of my abilities, experiences, and projects.
          </p>

          {/* About Card */}
          <div className="glass rounded-xl">
            {/* Skills Grid */}
            <div className="p-6 rounded-xl border border-border card-hover bg-secondary mb-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                my tools
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillCategories.map((category, idx) => (
                  <div key={idx}>
                    <div className="text-xl font-bold mb-4 text-foreground/70">
                      {category.name}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm card-hover"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Work */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {/* Education */}
              <InfoCard
                title="education"
                items={[
                  {
                    title: 'B.S in Computer Science',
                    subtitle: 'University of Saskatchewan (2020-2025)',
                    details: [
                      'Relevant Coursework: Operating Systems, Software Engineering, Computer Networks, AI',
                    ],
                  },
                ]}
              />

              {/* Work Experience */}
              <InfoCard
                title="work experience"
                items={[
                  {
                    title: 'Line Cook – Boston Pizza',
                    subtitle: 'Sept 2021 – Present',
                    details: [
                      'Trained new staff on operational systems',
                      'Maintained strong team communication under pressure',
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
