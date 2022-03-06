import classNames from 'classnames';
import React from 'react';
import Layout from '../components/layout';
import data from '../content/career.json';
import './career.css';

const CareerPage = () => {
  return (
    <Layout title="Career History" currentSlug="career">
      <div className="career">
        <h2 className="career__title">Career History</h2>

        {data.map((company) => {
          return (
            <section key={company.company}>
              <div className="career__company-container">
                <h3 className="career__company">{company.company}</h3>
                <p className="career__location">{company.location}</p>
              </div>

              {company.roles.map((role) => {
                return (
                  <div key={role.title} className="career__role-container">
                    <div className="career__role-info-container">
                      <h4 className="career__role">{role.title}</h4>

                      <dl className="career__date-list">
                        <div className="career__start-date-container career__date-container">
                          <dt className="career__start-date-label career__date-label">
                            Start Date:
                          </dt>
                          <dd className="career__start-date career__date-value">
                            {role.startDate}
                          </dd>
                        </div>

                        {role.endDate && (
                          <div className="career__end-date-container career__date-container">
                            <dt className="career__end-date-label career__date-label">
                              End Date:
                            </dt>
                            <dd className="career__end-date-list career__date-value">
                              {role.endDate}
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>
                    <ul className="career__responsibilities">
                      {role.responsibilities.map((responsibility) => {
                        return (
                          <li
                            className={classNames('career__responsibility', {
                              'career__responsibility--with-children':
                                responsibility?.accomplishments?.length > 0,
                            })}
                            key={responsibility.description}
                          >
                            {responsibility.description}
                            {responsibility?.accomplishments?.length > 0 && (
                              <ul className="career__accomplishments">
                                {responsibility.accomplishments.map(
                                  (accomplishment) => {
                                    return (
                                      <li
                                        className="career__accomplishment"
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
            </section>
          );
        })}
      </div>
    </Layout>
  );
};

export default CareerPage;
