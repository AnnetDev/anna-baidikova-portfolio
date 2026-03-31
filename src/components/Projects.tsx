import Image from 'next/image';
import AnimateIn from './AnimateIn';

const projects = [
  { href: 'https://annetdev.github.io/Internship/', name: 'Internship', img: 'internship' },
  { href: 'https://annetdev.github.io/my-timeline-project/', name: 'TimeLine component', img: 'timeline' },
  { href: 'https://wtqm9n.csb.app/', name: 'Farm Food Market', img: 'farmfood' },
  { href: 'https://annetdev.github.io/LIFETOUR/', name: 'Lifetour', img: 'lifetour' },
  { href: 'https://osnovavrn.ru/', name: 'Osnova', img: 'osnova' },
  { href: 'https://annetdev.github.io/SuperGym/', name: 'SuperGym', img: 'supergym' },
  { href: 'https://annetdev.github.io/Drink2go-grading/', name: 'Drink2Go', img: 'drink2go' },
  { href: 'https://annetdev.github.io/2448369-kekstagram-32/', name: 'Kekstagram', img: 'kekstagram' },
  { href: 'https://annetdev.github.io/2448369-cat-energy-31/', name: 'CatEnergy', img: 'catenergy' },
];

export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <h2 className="projects__heading">My projects</h2>
      <ul className="projects__list">
        {projects.map((project, i) => (
          <AnimateIn key={project.img} type="fade-right" delay={i * 0.05} as="li">
            <li>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">View project</span>
                <div>
                  <Image
                    className="projects__preview"
                    src={`/images/projects/${project.img}-mobile@1x.jpg`}
                    alt={`${project.name} project`}
                    width={220}
                    height={327}
                    sizes="(min-width: 1200px) 240px, (min-width: 768px) 220px, 200px"
                  />
                </div>
                <h3>{project.name}</h3>
              </a>
            </li>
          </AnimateIn>
        ))}
      </ul>
    </section>
  );
}
