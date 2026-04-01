import { Mail } from 'lucide-react';
import GitHubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer__main-content container">
        <a className="footer__gh-link gh-link" href="https://github.com/AnnetDev" target="_blank" rel="noopener noreferrer" aria-label="Go to Anna's GitHub">AnnetDev</a>
        <nav className="footer__nav">
          <menu className="footer__menu">
            <li className="footer__menu-item"><a href="#about">About</a></li>
            <li className="footer__menu-item"><a href="#skills">Skills</a></li>
            <li className="footer__menu-item"><a href="#projects">Projects</a></li>
            <li className="footer__menu-item"><a href="#contacts">Contacts</a></li>
          </menu>
        </nav>
        <ul className="footer__social-list">
          <li className="footer__social-list-item">
            <a className="footer__list-link footer__list-email-link" href="mailto:annabaidikova92@gmail.com" aria-label="Click to send an email">
              <Mail size={20} />
            </a>
          </li>
          <li className="footer__social-list-item">
            <a className="footer__list-link footer__list-github-link" href="https://github.com/AnnetDev/" target="_blank" rel="noopener noreferrer" aria-label="Go to Anna's GitHub">
              <GitHubIcon width={20} height={20} />
            </a>
          </li>
          <li className="footer__social-list-item">
            <a className="footer__list-link footer__list-linkedin-link" href="https://www.linkedin.com/in/anna-baidikova/" target="_blank" rel="noopener noreferrer" aria-label="Go to Anna's LinkedIn">
              <LinkedInIcon width={20} height={20} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__attributions">
        <p>Coded by <a href="https://github.com/AnnetDev" target="_blank" rel="noopener noreferrer" aria-label="Go to Anna's GitHub">Anna Baidikova</a></p>
      </div>
    </footer>
  );
}
