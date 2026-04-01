import { Mail } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function Contacts() {
  return (
    <section className="contacts container" id="contacts">
      <h2 className="contacts__heading">Let&apos;s keep in touch</h2>
      <p className="contacts__description">Always open for a chat — from brainstorming projects to casual networking</p>
      <ul className="contacts__list">
        <AnimateIn type="zoom-in" delay={0.1}>
          <li className="contacts__list-email">
            <a className="contacts__list-email-link" href="mailto:annabaidikova92@gmail.com">
              <Mail size={18} />
              <p>Send an e-mail</p>
            </a>
          </li>
        </AnimateIn>
        <AnimateIn type="zoom-in" delay={0.3}>
          <li className="contacts__list-github">
            <a className="contacts__list-github-link" href="https://github.com/AnnetDev/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              <p>My GitHub</p>
            </a>
          </li>
        </AnimateIn>
        <AnimateIn type="zoom-in" delay={0.5}>
          <li className="contacts__list-linkedin">
            <a className="contacts__list-linkedin-link" href="https://www.linkedin.com/in/anna-baidikova/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <p>My LinkedIn</p>
            </a>
          </li>
        </AnimateIn>
      </ul>

      <div className="contacts__extra">
        <h3 className="contacts__extra-heading">When I&apos;m not coding, you can find me:</h3>
        <ul className="contacts__extra-list">
          {[
            { icon: '🦸🏼‍♀️', text: 'Balancing family time with cleaning marathons' },
            { icon: '🏃🏼‍♀️', text: 'Active at the gym or sometimes jogging, sometimes just chasing after my kid' },
            { icon: '🏁', text: 'Watching Formula 1 races' },
            { icon: '🤓', text: 'Exploring new technologies, and occasionally browsing online catalogs' },
            { icon: '🎸', text: 'Listening to rock music' },
          ].map((item, i) => (
            <AnimateIn key={i} type="fade-right" delay={i * 0.1} className="contacts__extra-item-wrapper">
              <li className="contacts__extra-item">
                <span className="contacts__extra-item-icon">{item.icon}</span>
                {item.text}
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
