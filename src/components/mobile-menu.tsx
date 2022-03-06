import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { NavLink } from './header';
import Link from './link';
import './mobile-menu.css';

export interface MobileMenuProps {
  navLinks: NavLink[];
  currentSlug: string;
}

const MobileMenu = ({ navLinks, currentSlug }: MobileMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const escapeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', escapeMenu);
  }, []);

  const toggleMenu = () => {
    // Set up event listeners to close menu if area other than menu/trigger is clicked
    if (!menuOpen) {
      const handleStoppingPropagation = (event: MouseEvent) => {
        event.stopPropagation();
      };

      // Prevent menu close logic from running if the menu itself or if the button is clicked
      menuRef.current.addEventListener('mouseup', handleStoppingPropagation);
      triggerRef.current.addEventListener('mouseup', handleStoppingPropagation);

      document.addEventListener(
        'mouseup',
        (event: MouseEvent) => {
          setMenuOpen(false);
          menuRef.current?.removeEventListener(
            'mouseup',
            handleStoppingPropagation
          );
          triggerRef.current?.removeEventListener(
            'mouseup',
            handleStoppingPropagation
          );
        },
        {
          once: true,
        }
      );
    }

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
        ref={triggerRef}
      >
        Navigation Menu
      </button>
      <nav
        ref={menuRef}
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
