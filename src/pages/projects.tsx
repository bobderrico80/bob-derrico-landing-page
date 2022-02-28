import React from 'react';
import Layout from '../components/layout';
import Link from '../components/link';
import data from '../content/projects.json';
import './projects.css';

const ProjectsPage = () => {
  return (
    <Layout title="Projects" currentSlug="projects">
      <div className="projects">
        <h2 className="projects__title">Projects</h2>
        {data.map((project) => {
          return (
            <section key={project.name} className="projects__project">
              <div className="projects__header-container">
                <h3 className="projects__name">{project.name}</h3>
                <ul className="projects__link-list">
                  <li className="projects__link-item">
                    <Link url={project.url} external={true}>
                      View Project
                    </Link>
                  </li>

                  <li className="projects__link-item">
                    <Link url={project.github} external={true}>
                      View Code on GitHub
                    </Link>
                  </li>
                </ul>
              </div>

              <ul className="projects__feature-list">
                {project.features.map((feature) => {
                  return (
                    <li key={feature} className="projects__feature">
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
