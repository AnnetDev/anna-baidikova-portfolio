import AnimateIn from './AnimateIn';

const categories = [
  {
    label: 'Frontend',
    items: ['HTML5', 'CSS3 / Sass', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'REST API', 'MongoDB', 'WebSockets'],
  },
  {
    label: 'Tools',
    items: ['Git / GitHub', 'Figma', 'Vite', 'Webpack'],
  },
  {
    label: 'Practices',
    items: ['A11y / WCAG 2.1', 'BEM', 'Agile / Scrum', 'Component-based development'],
  },
  {
    label: 'Languages',
    items: ['English — fluent', 'Swedish — intermediate', 'Russian — native'],
  },
];

export default function Skills() {
  return (
    <section className="skills container" id="skills">
      <h2>Tech Stack &amp; Skills</h2>
      <dl className="skills__categories">
        {categories.map((category, ci) => (
          <AnimateIn key={category.label} type="fade-in" delay={ci * 0.08}>
            <div className="skills__category">
              <dt className="skills__category-label">{category.label}</dt>
              <dd className="skills__category-items">
                {category.items.map((item) => (
                  <span key={item} className="skills__tag">{item}</span>
                ))}
              </dd>
            </div>
          </AnimateIn>
        ))}
      </dl>
    </section>
  );
}
