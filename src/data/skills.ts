export type SkillCategory = {
  label: string;
  items: string[];
};

export const categories: SkillCategory[] = [
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
];
