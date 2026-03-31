'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import AnimateIn from './AnimateIn';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { isLight, toggleTheme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overlay-active', 'overlay-no-scroll');
    } else {
      document.body.classList.remove('overlay-active', 'overlay-no-scroll');
    }
    return () => {
      document.body.classList.remove('overlay-active', 'overlay-no-scroll');
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('button')) {
      closeMenu();
    }
  };

  return (
    <AnimateIn type="fade-down" delay={0.1} duration={1.2}>
      <header className="header container">
        <Link className="header__link" href="/">
          <Image src="/images/icons/ABlogo.svg" alt="Welcome to Anna's website" width={48} height={48} />
          <p>AnnetDev</p>
        </Link>

        <button
          className={`header__burger-menu${isOpen ? ' open' : ''}`}
          onClick={() => isMobile && setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
        >
          <span className="visually-hidden">Open navigation</span>
        </button>

        <nav
          ref={navRef}
          className={`header__nav${isOpen ? ' open' : ''}`}
          {...(isMobile && !isOpen ? { inert: true } : {})}
        >
          <menu className="header__menu" onClick={handleNavClick}>
            <li className="header__menu-item"><a href="#about">About</a></li>
            <li className="header__menu-item"><a href="#skills">Skills</a></li>
            <li className="header__menu-item"><a href="#projects">Projects</a></li>
            <li className="header__menu-item"><a href="#contacts">Contacts</a></li>
            <li className="header__menu-item">
              <button className="header__theme-toggle" onClick={toggleTheme}>
                <span className="visually-hidden">Toggle theme</span>
                <span className={`header__theme-toggle-icon header__theme-toggle-icon-sun${!isLight ? ' active' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="sunTitle">
                    <title id="sunTitle">Sun</title>
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <line x1="12" y1="1.5" x2="12" y2="4.5" />
                      <line x1="12" y1="19.5" x2="12" y2="22.5" />
                      <line x1="1.5" y1="12" x2="4.5" y2="12" />
                      <line x1="19.5" y1="12" x2="22.5" y2="12" />
                      <line x1="4.2" y1="4.2" x2="6.2" y2="6.2" />
                      <line x1="17.8" y1="17.8" x2="19.8" y2="19.8" />
                      <line x1="4.2" y1="19.8" x2="6.2" y2="17.8" />
                      <line x1="17.8" y1="6.2" x2="19.8" y2="4.2" />
                    </g>
                  </svg>
                </span>
                <span className={`header__theme-toggle-icon header__theme-toggle-icon-moon${isLight ? ' active' : ''}`}>
                  <span className="visually-hidden">Click to light-mode</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="moonTitle">
                    <title id="moonTitle">Moon</title>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="currentColor" />
                  </svg>
                </span>
              </button>
            </li>
          </menu>
        </nav>
      </header>
    </AnimateIn>
  );
}
