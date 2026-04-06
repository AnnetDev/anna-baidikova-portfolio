import { categories } from '@/data/skills';

export default function Hero() {
  return (
    <section className="hero " id="about">
      <div className="container">
        <div className="hero__text-container">
          <h1 className="hero__title">Anna Baidikova</h1>
          <p className="hero__role">Frontend &amp; Fullstack Developer</p>
          <p className="hero__intro">
            Hi! I&apos;m Anna — a Frontend & Fullstack developer based in Stockholm. I build things that work, look good, and actually make sense to the people using them. React, TypeScript, Node.js — from pixel to API.
          </p>
          <p className="hero__intro">
            Years in pharma marketing gave me a product mindset before I ever wrote a line of code.</p>
          <p className="hero__intro">Open to new opportunities, collaborations, and what comes next!</p>

          <a href="#projects" className="hero__cta-btn">View Projects</a>
        </div>

        <div className="hero__stack">
          <p className="hero__stack-label">Tech Stack</p>
          <dl className="hero__stack-categories">
            {categories.map((category) => (
              <div key={category.label} className="hero__stack-row">
                <dt className="hero__stack-category-label">{category.label}</dt>
                <dd className="hero__stack-tags">
                  {category.items.map((item) => (
                    <span key={item} className="hero__stack-tag">{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
