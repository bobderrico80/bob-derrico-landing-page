import classNames from 'classnames';
import React, { MouseEventHandler, ReactNode } from 'react';
import './link.css';

export interface LinkProps {
  url: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  role?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const Link = ({
  url,
  external,
  className,
  role,
  children,
  onClick,
}: LinkProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <a
      href={url}
      target={external ? '_blank' : null}
      rel={external ? 'noopener noreferrer' : null}
      className={classNames(className, 'link')}
      role={role}
      aria-label={external ? `${children} (opens in a new tab)` : null}
      onClick={handleClick}
    >
      {children}
      {external && (
        <svg aria-hidden="true" className="link__external-icon">
          <use xlinkHref="#external-link"></use>
        </svg>
      )}
    </a>
  );
};

export default Link;
