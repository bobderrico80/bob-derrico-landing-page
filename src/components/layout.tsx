import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import './layout.css';

export interface LayoutProps {
  children: ReactNode;
  currentSlug: string;
  title?: string;
}

const Layout = ({ children, title, currentSlug }: LayoutProps) => {
  let resolvedTitle = "Bob D'Errico - Software Engineer";

  if (title) {
    resolvedTitle = `${title} - ${resolvedTitle}`;
  }

  return (
    <div className="layout">
      <Helmet>
        <title>{resolvedTitle}</title>
      </Helmet>
      <Header currentSlug={currentSlug} />
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
