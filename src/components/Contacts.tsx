import AnimateIn from './AnimateIn';
import { contactLinks, hobbies } from '@/data/contacts';

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
      <h2 className="contacts__heading">Let&apos;s keep in touch</h2>
      <p className="contacts__description">Always open for a chat — from brainstorming projects to casual networking</p>
      <ul className="contacts__list">
        {contactLinks.map((link, i) => (
          <AnimateIn key={link.href} type="zoom-in" delay={(i + 1) * 0.2}>
            <li className={link.itemClass}>
              <a
                className={link.linkClass}
                href={link.href}
                {...(link.target && { target: link.target, rel: 'noopener noreferrer' })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" dangerouslySetInnerHTML={{ __html: link.svgContent }} />
                <p>{link.label}</p>
              </a>
            </li>
          </AnimateIn>
        ))}
      </ul>

      <div className="contacts__extra">
        <h3 className="contacts__extra-heading">When I&apos;m not coding, you can find me:</h3>
        <ul className="contacts__extra-list">
          {hobbies.map((item, i) => (
            <AnimateIn key={i} type="fade-right" delay={i * 0.1} className="contacts__extra-item-wrapper">
              <li className="contacts__extra-item">
                <span className="contacts__extra-item-icon">{item.icon}</span>
                {item.text}
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
