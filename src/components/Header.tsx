'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { Sun, Moon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
// import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contacts', label: 'Contacts' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  // const { isLight, toggleTheme } = useTheme();

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
    <header className="header ">
      <div className="container header-content-wrap">
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
            {navLinks.map(({ href, label }) => (
              <li key={href} className="header__menu-item">
                <a href={href}>{label}</a>
              </li>
            ))}
            {/* <li className="header__menu-item">
              <button className="header__theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <span className="visually-hidden">Toggle theme</span>
                {isLight ? <Moon size={22} /> : <Sun size={22} />}
              </button>
            </li> */}
          </menu>
        </nav>
        </div>
      </header>
  );
}
