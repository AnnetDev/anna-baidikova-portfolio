import { contactLinks, hobbies } from '@/data/contacts';

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
      <h2 className="contacts__heading">Let&apos;s keep in touch</h2>
      <p className="contacts__description">Always open for a chat — from brainstorming projects to casual networking</p>
      <ul className="contacts__list">
        {contactLinks.map((link) => (
          <li key={link.href} className={link.itemClass}>
            <a
              className={link.linkClass}
              href={link.href}
              {...(link.target && { target: link.target, rel: 'noopener noreferrer' })}
            >
              <link.Icon width={18} height={18} />
              <p>{link.label}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className="contacts__extra">
        <h3 className="contacts__extra-heading">When I&apos;m not coding, you can find me:</h3>
        <ul className="contacts__extra-list">
          {hobbies.map((item, i) => (
            <li key={i} className="contacts__extra-item">
              <span className="contacts__extra-item-icon">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
