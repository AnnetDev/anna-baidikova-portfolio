import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="projects " id="projects">
      <div className="container">
      <h2 className="projects__heading">Projects</h2>
      <ul className="projects__list">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </ul>
      </div>
    </section>
  );
}
