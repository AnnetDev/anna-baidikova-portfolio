import AnimateIn from './AnimateIn';
import { categories } from '@/data/skills';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
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
      </div>
    </section>
  );
}
