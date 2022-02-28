import * as React from 'react';
import Layout from '../components/layout';
import Link from '../components/link';
import './index.css';

const IndexPage = () => {
  return (
    <Layout currentSlug="home">
      <div className="home typewriter">
        <p className="home__paragraph">
          I am a{' '}
          <span className="home__text-highlight home__text-highlight--var-1">
            full-stack web developer
          </span>
          , specializing in{' '}
          <span className="home__text-highlight home__text-highlight--var-2">
            Angular
          </span>
          ,{' '}
          <span className="home__text-highlight home__text-highlight--var-3">
            React
          </span>
          ,{' '}
          <span className="home__text-highlight home__text-highlight--var-2">
            NodeJS/Express
          </span>
          , and{' '}
          <span className="home__text-highlight home__text-highlight--var-3">
            TypeScript
          </span>
          .
        </p>

        <p className="home__paragraph">
          See my{' '}
          <Link url="/career" className="home__text-highlight">
            career history
          </Link>
          , check out some of my{' '}
          <Link url="/projects" className="home__text-highlight">
            projects
          </Link>
          , look at my relevant{' '}
          <Link url="/skills" className="home__text-highlight">
            skills
          </Link>
          , or visit my{' '}
          <Link
            url="https://www.github.com/bobderrico80"
            className="home__text-highlight"
            external={true}
          >
            GitHub
          </Link>{' '}
          or{' '}
          <Link
            url="https://www.linkedin.com/in/bobderrico/"
            className="home__text-highlight"
            external={true}
          >
            LinkedIn
          </Link>{' '}
          pages.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
