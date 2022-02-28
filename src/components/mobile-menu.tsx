import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { NavLink } from './header';
import Link from './link';
import './mobile-menu.css';

export interface MobileMenuProps {
  navLinks: NavLink[];
  currentSlug: string;
}

const MobileMenu = ({ navLinks, currentSlug }: MobileMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const escapeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', escapeMenu);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-menu">
      <button
        className={classNames('mobile-menu__trigger', {
          'mobile-menu__trigger--open': menuOpen,
        })}
        type="button"
        id="nav-trigger"
        aria-haspopup="true"
        aria-controls="nav-menu"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        Navigation Menu
      </button>
      <nav
        className={classNames('mobile-menu__nav', {
          'mobile-menu__nav--open': menuOpen,
        })}
        id="nav-menu"
        aria-labelledby="nav-trigger"
      >
        <ul className="mobile-menu__list">
          {navLinks.map((navLink) => {
            return (
              <li className="mobile-menu__item" role="none" key={navLink.label}>
                <Link
                  url={navLink.url}
                  role="menuitem"
                  className={classNames({
                    'mobile-menu__link--current': navLink.slug === currentSlug,
                  })}
                  external={navLink.external}
                  onClick={onLinkClick}
                >
                  {navLink.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
