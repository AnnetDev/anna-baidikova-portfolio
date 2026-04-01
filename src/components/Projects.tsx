import Image from 'next/image';
import AnimateIn from './AnimateIn';
import { projects, type Project } from '@/data/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimateIn type="fade-right" delay={index * 0.05} as="li" className="projects__card-wrapper">
      <li className={`projects__card${project.featured ? ' projects__card--featured' : ''}`}>
        {project.featured && <span className="projects__badge">Featured</span>}

        <div className="projects__card-image">
          {project.img ? (
            <Image
              src={`/images/projects/${project.img}-mobile@1x.jpg`}
              alt={`${project.name} project`}
              width={400}
              height={240}
              sizes="(min-width: 1200px) 400px, (min-width: 768px) 340px, 100vw"
              className="projects__img"
            />
          ) : (
            <div className="projects__placeholder">
              <span>{project.name.charAt(0)}</span>
            </div>
          )}
        </div>

        <div className="projects__card-body">
          <h3 className="projects__card-title">{project.name}</h3>
          <p className="projects__card-desc">{project.description}</p>

          <ul className="projects__tech">
            {project.tech.map((t) => (
              <li key={t} className="projects__tech-tag">{t}</li>
            ))}
          </ul>

          <div className="projects__links">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__link projects__link--live">
              Live
            </a>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link projects__link--github">
                GitHub
              </a>
            )}
          </div>
        </div>
      </li>
    </AnimateIn>
  );
}

export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <h2 className="projects__heading">Projects</h2>
      <ul className="projects__list">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </ul>
    </section>
  );
}
