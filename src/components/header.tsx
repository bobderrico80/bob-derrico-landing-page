import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import './header.css';
import Link from './link';
import MobileMenu from './mobile-menu';

export interface HeaderProps {
  currentSlug: string;
}

export interface NavLink {
  url: string;
  label: string;
  slug?: string;
  external?: boolean;
}

const navLinks: NavLink[] = [
  { url: '/', label: 'Home', slug: 'home' },
  { url: '/career', label: 'Career', slug: 'career' },
  { url: '/projects', label: 'Projects', slug: 'projects' },
  { url: '/skills', label: 'Skills', slug: 'skills' },
  {
    url: 'https://www.github.com/bobderrico80',
    label: 'GitHub',
    external: true,
  },
  {
    url: 'https://www.linkedin.com/in/bobderrico/',
    label: 'LinkedIn',
    external: true,
  },
];

const Header = ({ currentSlug }: HeaderProps) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const mql = matchMedia('screen and (max-width: 768px)');

    const handleMqlChange = () => {
      setMobileMenu(mql.matches);
    };

    mql.addEventListener('change', handleMqlChange);

    setMobileMenu(mql.matches);

    return () => {
      mql.removeEventListener('change', handleMqlChange);
    };
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">Bob D'Errico - Software&nbsp;Engineer</h1>

      <div className="header__nav-container">
        {mobileMenu ? (
          <MobileMenu navLinks={navLinks} currentSlug={currentSlug} />
        ) : (
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navLinks.map((navLink) => {
                return (
                  <li
                    className="header__nav-item"
                    role="none"
                    key={navLink.label}
                  >
                    <Link
                      url={navLink.url}
                      role="menuitem"
                      className={classNames({
                        'header__nav-link--current':
                          navLink.slug === currentSlug,
                      })}
                      external={navLink.external}
                    >
                      {navLink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
