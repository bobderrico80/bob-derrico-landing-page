import React from 'react';
import { Helmet } from 'react-helmet';
import careerData from '../content/career.json';
import projectData from '../content/projects.json';
import activitiesData from '../content/activities.json';
import educationData from '../content/education.json';
import './resume.css';
import { CareerHistoryItem } from '../models/career';
import { ProjectsItem } from '../models/projects';
import { ActivitiesItem } from '../models/activities';
import { EducationItem } from '../models/education';

const ResumePage = () => {
  return (
    <div className="resume">
      <Helmet>
        <title>Resume - Robert D'Errico - Software Engineer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={''}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main className="resume__main">
        <header className="resume__header">
          <h1 className="resume__name">Robert D'Errico</h1>
          <div className="resume__contact-info">
            Marlton, NJ | 609-922-9905 |{' '}
            <a href="mailto:boderrico80@gmail.com">bobderrico80@gmail.com</a> |{' '}
            <a href="https://github.com/boderrico80" target="_blank">
              github.com/bobderrico80
            </a>
            .
          </div>
        </header>
        <section className="resume__section">
          <h2 className="resume__section-header">Career Summary</h2>

          {(careerData as CareerHistoryItem[])
            .filter((item) => !item.hideFromPrintResume)
            .map((company) => {
              return (
                <div
                  className="resume__career-history-item"
                  key={company.company}
                >
                  <div className="resume__company-info">
                    <h3 className="resume__company">{company.company}</h3>
                    <p className="resume__location">{company.location}</p>
                  </div>

                  {company.roles.map((role) => {
                    return (
                      <div className="resume__role-item" key={role.title}>
                        <div className="resume__role-info">
                          <h4 className="resume__role-title">{role.title}</h4>
                          <p className="resume__role-dates">
                            {role.startDate} - {role.endDate ?? 'present'}
                          </p>
                        </div>

                        <ul className="resume__responsibilities-list">
                          {role.responsibilities.map((responsibility) => {
                            return (
                              <li
                                className={
                                  'resume__responsibility-item' +
                                  (responsibility.accomplishments &&
                                  responsibility.accomplishments.length > 0
                                    ? ' resume__responsibility-item--has-accomplishments'
                                    : '')
                                }
                                key={responsibility.description}
                              >
                                {responsibility.description}
                                {responsibility.accomplishments && (
                                  <ul className="resume__accomplishments-list">
                                    {responsibility.accomplishments.map(
                                      (accomplishment) => {
                                        return (
                                          <li
                                            className="resume__accomplishments-item"
                                            key={accomplishment}
                                          >
                                            {accomplishment}
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </section>
        <section className="resume__section" style={{ breakBefore: 'page' }}>
          <h2 className="resume__section-header">Projects</h2>
          {(projectData as ProjectsItem[])
            .filter((item) => !item.hideFromPrintResume)
            .map((project) => {
              return (
                <div className="resume__project" key={project.name}>
                  <div className="resume__project-info">
                    <div className="resume__project-name">{project.name}</div>
                    <div className="resume__project-url">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.url}
                      </a>
                    </div>
                  </div>

                  <ul className="resume__project-feature-list">
                    {project.features.map((feature) => {
                      return (
                        <li
                          className="resume__project-feature-item"
                          key={feature}
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </section>
        <section className="resume__section">
          <h2 className="resume__section-header">Activities</h2>
          {(activitiesData as ActivitiesItem[])
            .filter((item) => !item.hideFromPrintResume)
            .map((activity) => {
              return (
                <div className="resume__activity" key={activity.name}>
                  <div className="resume__activity-info">
                    <div className="resume__activity-name">{activity.name}</div>
                    <div className="resume__activity-dates">
                      {activity.startDate} - {activity?.endDate ?? 'present'}
                    </div>
                  </div>

                  <ul className="resume__activity-accomplishments-list">
                    {activity.accomplishments.map((accomplishment) => {
                      return (
                        <li
                          className="resume__activity-accomplishment-list-item"
                          key={accomplishment}
                        >
                          {accomplishment}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </section>
        <section className="resume__section">
          <h2 className="resume__section-header">Education</h2>
          {(educationData as EducationItem[])
            .filter((item) => !item.hideFromPrintResume)
            .map((education) => {
              return (
                <div className="resume__education" key={education.name}>
                  <div className="resume__education-info">
                    <div className="resume__education-name">
                      {education.name}
                    </div>
                    <div className="resume__education-dates">
                      {education.startDate} - {education?.endDate ?? 'present'}
                    </div>
                  </div>
                  <div className="resume__education-degree">
                    {education.degree}
                  </div>
                </div>
              );
            })}
        </section>
      </main>
    </div>
  );
};

export default ResumePage;
